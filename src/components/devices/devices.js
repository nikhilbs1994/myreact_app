import React from 'react';
import { connect } from 'react-redux';
import Sensor from '../sensor/sensor';
import { updateSelectedDevice } from '../../container/action/deviceAction';
import { 
	getDeviceCount, 
	getDeviceDetails
} from '../../services/deviceApi';



class Device extends React.Component {

	constructor(props) {
        super(props);
        this.state = {
            sensorItems : []
        };
    }

	async componentDidMount() {
		let count = await this.props.getDeviceCount();
		this.updateDeviceData(count);
		this.props.updateSelectedDevice();	
	}

	updateDeviceData(count) {
		let sensorElements = [];
		for (let i = 0; i < count; i++) {
			this.props.getDeviceDetails(i).then((sensorData) => {
				const divStyle = {
					top: sensorData.location.latitude + '%',
					left: sensorData.location.longitude + '%',
				};
				sensorElements.push(<Sensor
					sensorId={sensorData.deviceId} 
					key={sensorData.deviceId} 
					positionStyle={divStyle} />);
				this.setState({sensorItems: sensorElements});
				if(i === 0) {
					this.props.updateSelectedDevice(sensorData.deviceId);
				}
			});				
		}
	}
  
	render() {
		return (<div>{this.state.sensorItems}</div>);
	}
}

function mapStateToProps(state) {
    return ({
        deviceCount: state.devices.deviceCount
    });
}

function mapDispatchToProps(dispatch) {
    return ({
		getDeviceCount: () => {
        	return dispatch(getDeviceCount(dispatch))
		},
		getDeviceDetails: (id) => {
        	return dispatch(getDeviceDetails(dispatch, id))
		},
		updateSelectedDevice: (id) => {
        	return dispatch(updateSelectedDevice(id))
      	}    
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Device);