import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import process from "process";
import { BusinessDetail } from "../BusinessDatailPage";
import "./map.css";

export const Maps = ({ API_KEYS }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEYS,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <MapCanvas />
    </div>
  );
};

function MapCanvas() {
  return (
    <>
      <GoogleMap
        zoom={10}
        center={{ lat: 44, lng: -80 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </>
  );
}
