import CONSTANTS from "../CONSTANTS";

export interface IVehicle {
    id: string
    name: string
    color: string
    plate_number: string
}

export interface IVehicleTelemetry {
    vehicle_id: string
    timestamp: number
    lat: number
    lng: number
    speed: number
    cpu_usage: number
    battery_level: number
}

export interface IVehicleCombinedTelemetry {
    id: string
    name: string
    color: string
    plateNumber: string
    lat: number
    lng: number
    speed: number
    cpuUsage: number
    batteryLevel: number
    timestamp: number   
}

export default class VehicleAPIService {
    static async findAll(): Promise<IVehicle[]>
    {
       const req = await fetch( `${CONSTANTS.API_URL}vehicles` );
       return await req.json();
    }

    static async getTelemetryFor( vehicleId: string ): Promise<IVehicleCombinedTelemetry>
    {
        const vehicleReq = await fetch( `${CONSTANTS.API_URL}vehicles/${vehicleId}` );
        const vehicle: IVehicle = await vehicleReq.json();

        const req = await fetch( `${CONSTANTS.API_URL}vehicles/${vehicleId}/telemetry` );
        const telemetry: IVehicleTelemetry = await req.json();

        return {
            id: vehicleId,
            name: vehicle.name,
            color: vehicle.color,
            plateNumber: vehicle.plate_number,
            lat: telemetry.lat,
            lng: telemetry.lng,
            speed: telemetry.speed,
            cpuUsage: telemetry.cpu_usage,
            batteryLevel: telemetry.battery_level,
            timestamp: telemetry.timestamp, 
        };
    }
};