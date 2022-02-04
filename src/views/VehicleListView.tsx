import { Component, ReactNode } from "react";
import MapWidget from "../components/MapWidget";
import SideDrawer from "../components/SideDrawer";
import VehicleItem from "../components/VehicleItem";
import VehicleAPIService, { IVehicle } from "../services/VehicleAPIService";

export default class VehicleListView extends Component {
    state = {
        vehicleList: [],
    }

    render(): ReactNode {
        return (
            <div className="list--vehicles">
                { this.state.vehicleList.map( (vehicle: IVehicle) => ( <VehicleItem key={vehicle.id} vehicle={vehicle} /> )) }
            </div>
        )
    }

    componentDidMount()
    {
        this.getVehicles()
    }

    getVehicles = async () => {
        const vehicleList = await VehicleAPIService.findAll();

        this.setState( {
            vehicleList,
        } )
    }
}