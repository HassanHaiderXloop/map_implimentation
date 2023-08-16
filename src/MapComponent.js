import React, { useEffect, useState } from "react";
import {MapContainer, TileLayer } from "react-leaflet";
import MyShapes from "./MyShapes";
import shapesData from "./shapesData"; // Import the shapes data
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet-draw/dist/leaflet.draw.css";



const MapComponent = () => {
  const center = [24.8083, 67.0225];

  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    const loadLeaflet = async () => {
      const leafletCssLink = document.createElement("link");
      leafletCssLink.href = "https://unpkg.com/leaflet@1.5.1/dist/leaflet.css";
      leafletCssLink.rel = "stylesheet";

      const leafletJsScript = document.createElement("script");
      leafletJsScript.src = "https://unpkg.com/leaflet@1.5.1/dist/leaflet.js";
      leafletJsScript.async = true;

      document.head.appendChild(leafletCssLink);
      document.head.appendChild(leafletJsScript);

      await new Promise((resolve, reject) => {
        leafletJsScript.onload = () => resolve();
        leafletJsScript.onerror = () => reject();
      });

      setLeafletLoaded(true);
    };

    loadLeaflet();

    return () => {
      const leafletCssLink = document.querySelector(
        'link[href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css"]'
      );
      const leafletJsScript = document.querySelector(
        'script[src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"]'
      );

      if (leafletCssLink) {
        document.head.removeChild(leafletCssLink);
      }

      if (leafletJsScript) {
        document.head.removeChild(leafletJsScript);
      }
    };
  }, []);

  if (!leafletLoaded) {
    return <div>Loading Leaflet...</div>;
  }

  return (
    <div className="App">
      <MapContainer center={center} zoom={15} style={{ height: "100vh", width: "100%"}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MyShapes shapesData={shapesData} />
        
      </MapContainer>
    </div>
  );
};

export default MapComponent;