import React from "react";
import { Card } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import binicon from "./icons8-bin.gif";

// Remove default icon URLs
delete L.Icon.Default.prototype._getIconUrl;

// Define custom icon options
const customIcon = new L.Icon({
  iconUrl: binicon, // Use the imported GIF directly
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

function BinsMap() {
  const positions = [
    [27.666371208832715, 84.43503905163637],
    [27.665672, 84.433699],
  ];
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Bin Locations</Card.Title>
          <MapContainer
            center={[27.666371208832715, 84.43503905163637]}
            zoom={18}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {positions.map((position, idx) => (
              <Marker
                key={`marker-${idx}`}
                position={position}
                icon={customIcon} // Apply the custom icon
              >
                <Popup>Bin {idx + 1}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BinsMap;
