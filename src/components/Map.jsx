import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-10.0, -52.0, 0],
        center: [-5, -3],
        scale: 2000,
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
        subject={[2.3522, 48.8566]}
        dx={-100}
        dy={-50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Paris"}
        </text>
      </Annotation>
      <Annotation
        subject={[4.0347, 49.2583]}
        dx={150}
        dy={-40}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "square",
        }}
      >
        <text
          x="38"
          y="-10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Reims"}
        </text>
      </Annotation>
      <Annotation
        subject={[4.0347, 49.2583]}
        dx={150}
        dy={-40}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "square",
        }}
      >
        <text
          x="38"
          y="-10"
          textAnchor="end"
          alignmentBaseline="middle"
          fill="white"
        >
          {"Reims"}
        </text>
      </Annotation>
      <Annotation
        subject={[5.3698, 43.2965]}
        dx={100}
        dy={50}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="white">
          {"Marseille"}
        </text>
      </Annotation>

      <Annotation
        subject={[-0.5792, 44.8378]}
        dx={-150}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Bordeaux"}
        </text>
      </Annotation>

      <Annotation
        subject={[4.8343, 45.7485]}
        dx={60}
        dy={-40}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="white">
          {"Lyon"}
        </text>
      </Annotation>

      <Annotation
        subject={[7.7521, 48.5734]}
        dx={150}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="8" textAnchor="start" alignmentBaseline="middle" fill="white">
          {"Strasbourg"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
