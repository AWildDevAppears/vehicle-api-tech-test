import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";

import { Component, CSSProperties, ReactNode } from "react";

import { IVehicleCombinedTelemetry } from "../../services/VehicleAPIService";

import './side-drawer.css';


interface IProps {
    vehicle: IVehicleCombinedTelemetry | null
}

export default class SideDrawer extends Component<IProps> {
    render(): ReactNode {
        return (
            <div className="side-drawer">
                <div className="card">
                    <h1><FontAwesomeIcon icon={faCar} style={ this.getCarIconStyle() }></FontAwesomeIcon> { this.props.vehicle?.name }</h1>
                    <p>plate: {this.props.vehicle?.plateNumber}</p>

                    <ul>
                        <li>Speed: { this.props.vehicle?.speed }mph</li>
                        <li>CPU usage: { this.props.vehicle?.cpuUsage }%</li>
                        <li>batteryLevel: { this.props.vehicle?.batteryLevel }%</li> 
                    </ul>

                    <p>Last updated: { this.getTimeStamp() }</p>

                </div>
            </div>
        );
    }

    getCarIconStyle = (): CSSProperties => {
        const color = this.props.vehicle?.color;

        return {
            color,
        }
    }

    getTimeStamp = (): String => {
        const timestamp = this.props.vehicle?.timestamp;

        if (timestamp === null) return '';

        const date = new Date( timestamp || 0 );

        return date.toUTCString();
    }
}


