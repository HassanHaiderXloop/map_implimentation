import React, { useState } from "react";
import { GeoJSON, useMapEvent } from "react-leaflet";

const MyShapes = ({ shapesData }) => {
  const map = useMapEvent("zoom", () => map.invalidateSize()); // Update map size on zoom change

  const [showShapes, setShowShapes] = useState(false);

  useMapEvent("zoomend", (e) => {
    const currentZoom = e.target.getZoom();
    setShowShapes(currentZoom >= 15);
  });


  const getStyleForFeature = (feature) => {
    // Example: Style polygons differently based on their type
    if (feature.geometry.type === "Polygon") {
      return { color: "blue", fillColor: "lightblue", fillOpacity: 0.6 };
    } else if (feature.geometry.type === "Point") {
      return { color: "green", fillColor: "lightgreen", fillOpacity: 0.6 };
    }
    // Add more style conditions if needed
    return { color: "red" }; // Default style
  };

  const onEachFeature = (feature, layer) => {
    // Example: Bind a popup with feature details
    const { label, owner, address, currentPrice } = feature.properties.data;
    layer.bindPopup(
      `<div>
        <h4>${label}</h4>
        <p><strong>Owner:</strong> ${owner}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Current Price:</strong> ${currentPrice}</p>
      </div>`
    );
  };

  return (
    <>
      {showShapes && (
        <GeoJSON
          data={shapesData.features}
          style={getStyleForFeature}
          onEachFeature={onEachFeature}
        />
      )}
    </>
  );
};

export default MyShapes;


