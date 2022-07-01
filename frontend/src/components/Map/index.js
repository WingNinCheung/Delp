import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { useSelector } from "react-redux";
import "./map.css";

export const Maps = ({ API_KEYS, businessId }) => {
  const thisBusiness = useSelector((state) => state.business[businessId]);

  const data = { lat: thisBusiness.lat, lng: thisBusiness.lng };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEYS,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <MapCanvas data={data} />
    </div>
  );
};

function MapCanvas({ data }) {
  console.log(data);
  if (data.lat === null) {
    data = { lat: 37.78532, lng: -122.431389 };
  }

  console.log(data);
  return (
    <>
      <GoogleMap zoom={14} center={data} mapContainerClassName="map-container">
        <Marker position={data}></Marker>
      </GoogleMap>
    </>
  );
}
