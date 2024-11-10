import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "../styles/Zones.css";
import "leaflet/dist/leaflet.css";
import {Link} from 'react-router-dom';
const Zones = () => {
  delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});
  const trainData = {
    northern: [
        { name: "Rajdhani Express", trainNumber: "12951", start: "New Delhi", end: "Mumbai", coordinates: [[28.6139, 77.2090], [19.0760, 72.8777]] },
        { name: "Shatabdi Express", trainNumber: "12031", start: "New Delhi", end: "Lucknow", coordinates: [[28.6139, 77.2090], [26.8467, 80.9462]] },
        { name: "Vande Bharat Express", trainNumber: "22436", start: "New Delhi", end: "Varanasi", coordinates: [[28.6139, 77.2090], [25.3176, 82.9739]] }
    ],
    southern: [
        { name: "Chennai Express", trainNumber: "12637", start: "Chennai", end: "Mumbai", coordinates: [[13.0827, 80.2707], [19.0760, 72.8777]] },
        { name: "Kanyakumari Express", trainNumber: "16381", start: "Kanyakumari", end: "Bangalore", coordinates: [[8.0895, 77.5311], [12.9716, 77.5946]] },
        { name: "Trivandrum Rajdhani Express", trainNumber: "12625", start: "Trivandrum", end: "New Delhi", coordinates: [[8.5241, 76.9366], [28.6139, 77.2090]] }
    ],
    eastern: [
        { name: "Howrah Rajdhani Express", trainNumber: "12301", start: "Howrah", end: "New Delhi", coordinates: [[22.5726, 88.3639], [28.6139, 77.2090]] },
        { name: "Poorva Express", trainNumber: "12303", start: "Howrah", end: "New Delhi", coordinates: [[22.5726, 88.3639], [28.6139, 77.2090]] },
        { name: "Saraighat Express", trainNumber: "15649", start: "Howrah", end: "Guwahati", coordinates: [[22.5726, 88.3639], [26.1445, 91.7362]] }
    ],
    western: [
        { name: "Mumbai Rajdhani Express", trainNumber: "12951", start: "Mumbai", end: "New Delhi", coordinates: [[19.0760, 72.8777], [28.6139, 77.2090]] },
        { name: "Gujarat Mail", trainNumber: "12901", start: "Mumbai", end: "Ahmedabad", coordinates: [[19.0760, 72.8777], [23.0225, 72.5714]] },
        { name: "Bandra Terminus – Jaipur Garib Rath Express", trainNumber: "12953", start: "Bandra", end: "Jaipur", coordinates: [[19.0561, 72.8481], [26.9124, 75.7873]] }
    ]
};
    const [zone, setZone] = useState("");
    const [trainList, setTrainList] = useState([]);
    const [routeLayer, setRouteLayer] = useState(null);
    const mapRef = useRef(null); // Using useRef to store map instance

    useEffect(() => {
        // Check if map is already initialized
        if (mapRef.current !== null) return;

        // Initialize the map only once
        mapRef.current = L.map("map").setView([20.5937, 78.9629], 5);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: "&copy; OpenStreetMap contributors"
        }).addTo(mapRef.current);

        const indiaBounds = L.latLngBounds([6.55, 68.11], [35.67, 97.4]);
        mapRef.current.setMaxBounds(indiaBounds);
        mapRef.current.on("drag", () => mapRef.current.panInsideBounds(indiaBounds, { animate: true }));
    }, []);

    const handleZoneChange = (e) => {
        setZone(e.target.value);
        const selectedTrains = trainData[e.target.value] || [];
        setTrainList(selectedTrains);
        displayRoutes(selectedTrains);
    };

    const displayRoutes = (trains) => {
        if (mapRef.current && routeLayer) {
            routeLayer.clearLayers();
        }

        const layerGroup = L.layerGroup();

        trains.forEach((train) => {
            const routeCoordinates = train.coordinates.map(coord => L.latLng(coord));
            const routeLine = L.polyline(routeCoordinates, { color: "blue", weight: 5 }).addTo(layerGroup);

            const startMarker = L.marker(routeCoordinates[0]).addTo(layerGroup).bindPopup(`<b>Start:</b> ${train.start}`);
            const endMarker = L.marker(routeCoordinates[routeCoordinates.length - 1]).addTo(layerGroup).bindPopup(`<b>End:</b> ${train.end}`);
        });

        layerGroup.addTo(mapRef.current);
        setRouteLayer(layerGroup);
    };

    const bookTicket = (train) => {
        alert(`Booking ticket for ${train.name} (Train No: ${train.trainNumber})`);
    };

    return (
        <div className="zone-container">
            <h1>Train Services by Zone</h1>
            <select id="zoneSelect" onChange={handleZoneChange}>
                <option value="">Select Zone</option>
                <option value="northern">Northern</option>
                <option value="southern">Southern</option>
                <option value="eastern">Eastern</option>
                <option value="western">Western</option>
            </select>

            <div id="map" className="map"></div>
            <ul id="trainListContainer">
                {trainList.map((train, index) => (
                    <li key={index}>
                        <strong>{train.name}</strong> (Train No: {train.trainNumber})
                        <br />
                        <em>From {train.start} to {train.end}</em>
                        <br />
                        <Link to='/route'><button style={{backgroundColor:'tomato',marginRight:'-140px'}}>Route</button></Link>
                        <button onClick={() => bookTicket(train)} style={{marginRight:'40px'}}>Ticket Booking</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Zones;
