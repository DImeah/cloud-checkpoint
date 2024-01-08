import React from "react";
import GoogleMapReact from "google-map-react";
import "./map.css";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

// Map component imports  the map_api_key from the .env file
const map_api_key = import.meta.env.VITE_MAP_API_KEY;

// LocationPin component represents the pin on the map with a text label
const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

// Map component displays the Google Map with a fixed LocationPin
const Map = ({ location, zoomLevel }) => {
  // Define the location coordinates and address
  const loc = {
    address: "iFarms KM 12 Gboko Road Makurdi.",
    lat: 7.7205278,
    lng: 8.6567222,
  };

  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Farm</h2>

      <div className="google-map">
        {/* GoogleMapReact component with API key, initial center, and zoom level */}
        <GoogleMapReact
          bootstrapURLKeys={{ key: map_api_key }}
          defaultCenter={loc}
          defaultZoom={zoomLevel}
        >
          {/* LocationPin component with fixed coordinates and address */}
          <LocationPin lat={7.7205278} lng={8.6567222} text={loc.address} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
