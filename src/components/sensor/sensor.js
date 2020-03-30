import React from 'react';
import './sensor.css';
import { connect } from 'react-redux';
import { updateSelectedDevice } from '../../container/action/deviceAction';


class Sensor extends React.Component {
	constructor(props) {
		super(props);
		this.selectSensor = this.selectSensor.bind(this);
	}

	selectSensor (event) {
		event.preventDefault();
		if(this.props.selectedDevice !== this.props.sensorId)
			this.props.updateSelectedDevice(this.props.sensorId);
	}
	
	render() {
		let className = 'dot';
		if (this.props.sensorId === this.props.selectedDevice) {
			className += ' dot-active';
		}
		return (<span 
			style={this.props.positionStyle} 
			className={className}
			onClick={this.selectSensor}></span>);
	}
}

function mapStateToProps(state) {
    return ({
        selectedDevice: state.devices.selectedDevice
    });
}

function mapDispatchToProps(dispatch) {
    return ({
		updateSelectedDevice: (id) => {
        	return dispatch(updateSelectedDevice(id))
      	}    
    });
}

export default connect(mapStateToProps, mapDispatchToProps)(Sensor);