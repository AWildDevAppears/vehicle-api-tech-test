import { Component, ReactNode } from "react";
import { useParams } from "react-router-dom";

import MapWidget from "../components/MapWidget";
import SideDrawer from "../components/SideDrawer";
import VehicleAPIService, { IVehicleCombinedTelemetry } from "../services/VehicleAPIService";

interface IProps {
    vehicleId: string
}

interface IState {
    vehicle: IVehicleCombinedTelemetry | null,
}

class SingleVehicleViewUI extends Component<IProps, IState> {
    state = {
        vehicle: null,
    }

    render(): ReactNode {
        return (
            <div>
                <MapWidget vehicle={ this.state.vehicle }></MapWidget>
                <SideDrawer vehicle={ this.state.vehicle }></SideDrawer>
            </div>
        )
    }

    componentDidMount()
    {
        this.getVehicle()
    }

    getVehicle = async () => {
        const id = this.props.vehicleId;

        const vehicle = await VehicleAPIService.getTelemetryFor(id);

        this.setState( {
            vehicle,
        } )
    }
}


const SingleVehicleView = () => {
    const params = useParams();

    const id = params.vehicleId || '';

    return (
        <div>
            <SingleVehicleViewUI vehicleId={id} />
        </div>
    )
}

export default SingleVehicleView;