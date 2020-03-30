import React from 'react';
import './dashboard.css'
import { Container, Row, Col } from 'react-bootstrap';
import Building from '../../components/building/building';
import SemiCircleChart from '../../components/semiCircleChart/semiCircleChart';
import { connect } from 'react-redux';
import { getDashboardData } from '../../services/liveDataApi';


class Dashboard extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            charts : []
		};
	}

	async componentDidUpdate(prevProps) {
		if (prevProps.selectedDevice !== this.props.selectedDevice) {
			console.log("componentDidUpdate");
			let charts =  await this.updateDashboardChart();
			console.log("setState");
			this.setState({charts: charts});	
		}
	}


	async updateDashboardChart() {
		console.log(this.props.selectedDeviceData);
		let options = {
			deviceIds: this.props.selectedDeviceData.logicalDeviceId,
			limit: 1,
			offset: 0
		};
		let dashboardData = await this.props.getDashboardData(options);
		console.log(dashboardData)
		let charts = this.props.selectedDeviceData.paramDefinitions.map((param) =>{
			if(param.isDisplayEnabled && param.paramName !== "time") {
				let limitIndex = this.getParamValueLimitIndex(param.limits, dashboardData[0].data[param.paramName]);
 				return (
					<Col sm={4} className="db-column" key={param.paramName} >
						<SemiCircleChart
							value={dashboardData[0].data[param.paramName]}
							max={param.maxRanges.max}
							min={param.maxRanges.min}
							title={param.displayNameHtml}
							unit={param.unitDisplayHtml}
							color={param.limits[limitIndex].color}
						/>
						<div dangerouslySetInnerHTML={{__html: param.displayNameHtml}}>
						</div>
					</Col>
				);
			}
			return null;
		});
		return charts;
	}

	getParamValueLimitIndex (limits, value) {
		if (limits != null && limits.length > 0 && value != null) {
			for (var i = 0; i < limits.length; i++) {
				if (limits[i].min != null && limits[i].max != null && value >= limits[i].min && value <= limits[i].max)
					return i;
				if (limits[i].min != null && limits[i].max == null && value >= limits[i].min)
					return i;
				if (limits[i].min == null && limits[i].max != null && value <= limits[i].max)
					return i;
			}
		}
		return -1;
	}

	render() {
		return (
			<div>
				<Building />
				<Container className="db-container">
					<Row>
						{this.state.charts}
					</Row>
				</Container>
			</div>);

	}
}

function mapStateToProps(state) {
    return ({
		dashBoardData: state.liveData.dashBoard,
		selectedDevice: state.devices.selectedDevice,
		selectedDeviceData: state.devices.data[state.devices.selectedDevice]
    });
}

function mapDispatchToProps(dispatch) {
    return ({
		getDashboardData: (options) => {
        	return dispatch(getDashboardData(dispatch, options))
      	}    
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
