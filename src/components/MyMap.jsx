import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
    const position = [23.7651708, 90.3642655]; // replace with your latitude and longitude

    return (
        <MapContainer center={position} zoom={13} className="h-96 w-full">
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>Alavi's Location</Popup>
            </Marker>
        </MapContainer>
    );
};

export default MyMap;
