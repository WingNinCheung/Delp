import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

import { useSelector } from "react-redux";
import "./map.css";

export const Maps = ({ API_KEYS, businessId }) => {
  const thisBusiness = useSelector((state) => state.business[businessId]);

  const center = { lat: thisBusiness.lat, lng: thisBusiness.lng };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: API_KEYS,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div>
      <MapCanvas center={center} />
    </div>
  );
};

// const center = { lat: 44, lng: -80 };

function MapCanvas({ center }) {
  return (
    <>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center}></Marker>
      </GoogleMap>
    </>
  );
}
