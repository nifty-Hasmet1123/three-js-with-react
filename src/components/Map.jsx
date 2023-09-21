import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  // ZoomableGroup,
  // Line
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 1000,
        center: [121.7740, 12.8797]
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[121.7740, 12.8797]}
        dx={-90}
        dy={-20}
        // connectorProps={{
        //   stroke: "white",
        //   strokeWidth: 2,
        //   strokeLinecap: "round"
        // }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {/* {"Manila"} */}
        </text>
      </Annotation>
      <Annotation
        subject={[121.5654, 25.0330]}
        dx={90}
        dy={-30}
        // connectorProps={{
        //   stroke: "white",
        //   strokeWidth: 2,
        //   strokeLinecap: "round"
        // }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {/* {"Taiwan"} */}
        </text>
      </Annotation>
      {/* <Line
        coordinates={[
          [121.7740, 12.8797], // coordinates (Manila, Philippines)
          [121.5654, 25.0330], // coordinates (Taipei, Taiwan)
        ]}
        stroke="green" // Line color
        strokeWidth={2} // Line width
        strokeLinecap="round" // Line cap style
      /> */}
    </ComposableMap>
  );
};

export default Map;
