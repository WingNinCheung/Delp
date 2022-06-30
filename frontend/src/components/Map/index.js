import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import process from "process";
import { BusinessDetail } from "../BusinessDatailPage";
import "./map.css";

export const Maps = () => {
  console.log(process.env.REACT_APP_GOOGLE_KEYS);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_KEYS,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <Map />
    </div>
  );
};

function Map() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 44, lng: -80 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
