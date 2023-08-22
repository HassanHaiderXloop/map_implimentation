// import React, { useState } from "react";
// import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
// import MyShapes from "./MyShapes";
// import shapesData from "./shapesData"; // Import the shapes data
// import "bootstrap/dist/css/bootstrap.min.css";
// import "leaflet-draw/dist/leaflet.draw.css";
// import { EditControl } from "react-leaflet-draw";


// const MapContain = () => {
//   const center = [24.8083, 67.0225];
//   const [leafletLoaded, setLeafletLoaded] = useState(false);

//   const handleScriptLoad = () => {
//     setLeafletLoaded(true);
//   };
//   return (
//     <div className="App">
//       <MapContainer
//         center={center}
//         zoom={15}
//         style={{ height: "100vh", width: "100%" }}
//       >
//         <TileLayer
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         />
//         <MyShapes shapesData={shapesData} />
//         <FeatureGroup>
//           <EditControl
//             position="topright"
//             draw={{
//               rectangle: false,
//               polyline: true,
//               polygon: true,
//               circle: false,
//               circlemarker: true,
//               marker: true,
//             }}
//             onCreated={handleScriptLoad}
//           />
//         </FeatureGroup>
//       </MapContainer>
//       <script
//         src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
//         async
//         onLoad={handleScriptLoad}
//       />
//     </div>
//   );
// };

// export default MapContain;

import React, { useState } from "react";
import { FeatureGroup, MapContainer, TileLayer } from "react-leaflet";
import MyShapes from "./MyShapes.js";
import shapesData from "./shapesData";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControl } from "react-leaflet-draw";

const MapContain = () => {
  const center = [24.8083, 67.0225];
  const [leafletLoaded, setLeafletLoaded] = useState(false);
  const [selectedMap, setSelectedMap] = useState("map1"); // Default selected map

  const handleScriptLoad = () => {
    setLeafletLoaded(true);
  };

  const handleMapChange = (map) => {
    setSelectedMap(map);
  };

  return (
    <div className="App">
      <MapContainer
        center={center}
        zoom={15}
        style={{ height: "100vh", width: "100%" }}
      >
        {selectedMap === "map1" && (
          <TileLayer maxZoom={19}
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        )}
        {selectedMap === "map2" && (
          <TileLayer maxZoom={19}
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          
          />
        )}
        <MyShapes shapesData={shapesData} />
        <FeatureGroup>
          <EditControl
            position="topright"
            draw={{
              rectangle: false,
              polyline: true,
              polygon: true,
              circle: false,
              circlemarker: true,
              marker: true,
            }}
            onCreated={handleScriptLoad}
          />
        </FeatureGroup>
      </MapContainer>

      <div className="map-switcher" style={{ textAlign: "center", margin: "1rem" }}>
        <button
          onClick={() => handleMapChange("map1")}
          className={selectedMap === "map1" ? "active" : ""}
        >
          Map 1
        </button>
        <button
          onClick={() => handleMapChange("map2")}
          className={selectedMap === "map2" ? "active" : ""}
        >
          Map 2
        </button>
      </div>
      <script
        src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js"
        async
        onLoad={handleScriptLoad}
      />
    </div>
  );
};

export default MapContain;