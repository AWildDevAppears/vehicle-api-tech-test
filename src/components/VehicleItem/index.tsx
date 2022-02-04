import { Component, ReactNode } from "react";
import { Link } from "react-router-dom";
import { IVehicle } from "../../services/VehicleAPIService";



interface IProps {
    vehicle: IVehicle,
} 

export default class VehicleItem extends Component<IProps> {
    render(): ReactNode {
        return (
            <Link to={`/vehicle/${this.props.vehicle.id}`}>
                <div className="card">
                    <h1>{ this.props.vehicle.name }</h1>
                    <p>{ this.props.vehicle.plate_number }</p>
                </div>
             </Link>        
        )
    }
}