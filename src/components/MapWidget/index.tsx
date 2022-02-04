import { Component, ReactNode }from 'react';
import MapBox from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';
import './map.css';
import { IVehicleCombinedTelemetry } from '../../services/VehicleAPIService';
import CONSTANTS from '../../CONSTANTS';

interface IProps {
    vehicle: IVehicleCombinedTelemetry | null
}


let map: MapBox.Map | null = null;

export default class MapWidget extends Component<IProps> {
    render(): ReactNode {
        return (
           <div className="map" id="map">
           </div> 
        );
    }

    componentDidMount()
    {
        MapBox.accessToken = CONSTANTS.MAPBOX_KEY || '';

        map = new MapBox.Map({
            container: 'map',
            style: 'mapbox://styles/awilddevappears/ckz5z1et9000z14nj7f12bdrw'
        });
    }

    componentDidUpdate()
    {
        this.addMarkers();
    }


    addMarkers = () =>
    {
        if (!map) return;
        if (!this.props.vehicle) return;

        const color = this.props.vehicle.color;

        const lat = this.props.vehicle.lat;
        const long = this.props.vehicle.lng;

        new MapBox.Marker({
            color, 
            }).setLngLat([long, lat])
            .addTo(map);

        map.flyTo({
            center:[long, lat],
        })
    }


}