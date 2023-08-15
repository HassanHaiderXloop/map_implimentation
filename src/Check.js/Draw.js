import React from 'react';
import { FeatureGroup, MapContainer, TileLayer } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

const Draw = () => {
  const center = [24.8083, 67.0225];

  return (
    <MapContainer center={center} zoom={15} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <FeatureGroup>
        <EditControl
          position="topright"
          draw={{
            rectangle: true,
            polyline: true,
            polygon: true,
            circle: true,
            circlemarker: true,
            marker: true,
          }}
        />
      </FeatureGroup>
    </MapContainer>
  );
};

export default Draw;
