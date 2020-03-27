import React from 'react';
import Carousels from '../carousels/carousels';
import Devices from '../devices/devices';
import './building.css'

class Building extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            building: [{
                id: "building1",
                img: process.env.PUBLIC_URL + "/img/building1.jpg",
                alt: "building1"
            }]
        };
    }

    render() {
        return (
            <div className="building py-4">
                <Carousels items={this.state.building}>
                    <Devices />
                </Carousels>
                
            </div>
        );
    }
}

export default Building;