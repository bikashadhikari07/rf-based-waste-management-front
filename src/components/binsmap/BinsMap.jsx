import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import binicon from "./icons8-bin.gif";
import gbicon from "./icons-gbc.gif";
// Remove default icon URLs
delete L.Icon.Default.prototype._getIconUrl;

// Define custom icon options
const customIcon = new L.Icon({
  iconUrl: binicon, // Use the imported GIF directly
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

const customIcon2 = new L.Icon({
  iconUrl: gbicon, // Use the imported GIF directly
  iconSize: [25, 41], // Size of the icon [width, height]
  iconAnchor: [12, 41], // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // Point from which the popup should open relative to the iconAnchor
});

function BinsMap() {
  const [bins, setBins] = useState([]);
  const [collectors, setCollectors] = useState([]);

  useEffect(() => {
    // Fetch bin data from the server
    const fetchBins = async () => {
      try {
        const response = await fetch("http://localhost:3002/bins");
        if (!response.ok) {
          throw new Error("Failed to fetch bins");
        }
        const data = await response.json();
        setBins(data);
      } catch (error) {
        console.error("Error fetching bins:", error);
      }
    };

    // Fetch garbage collector data from the server
    const fetchCollectors = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/garbageCollectors/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch collectors");
        }
        const data = await response.json();
        setCollectors(data);
      } catch (error) {
        console.error("Error fetching collectors:", error);
      }
    };

    fetchBins();
    fetchCollectors();
  }, []);

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Map View</Card.Title>
          <MapContainer
            center={[27.666371208832715, 84.43503905163637]} // Center coordinates
            zoom={18}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Wastee</a> '
            />

            {/* Display Bins */}
            {bins.map((bin, idx) => (
              <Marker
                key={`bin-${idx}`}
                position={[bin.coordinates[1], bin.coordinates[0]]} // Latitude, Longitude
                icon={customIcon} // Apply the custom icon
              >
                <Popup>
                  Bin {idx + 1} <br />
                  Fullness: {bin.fullness}% <br />
                  Last Emptied: {new Date(bin.lastEmptied).toLocaleString()}
                </Popup>
              </Marker>
            ))}

            {/* Display Garbage Collectors */}
            {collectors.map((collector, idx) => (
              <Marker
                key={`collector-${idx}`}
                position={[collector.latitude, collector.longitude]} // Latitude, Longitude
                icon={customIcon2} // Use the same custom icon
              >
                <Popup>
                  Vehicle Number: {collector.vehicleNumber} <br />
                  State: {collector.active ? "active" : "inactive"}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BinsMap;
