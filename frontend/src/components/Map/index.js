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
  if (data.lat === null) {
    data = { lat: 37.78532, lng: -122.431389 };
  }

  return (
    <>
      <GoogleMap zoom={14} center={data} mapContainerClassName="map-container">
        <Marker position={data}></Marker>
      </GoogleMap>
    </>
  );
}

export const convertToGeoCode = async (address, city) => {
  const KEYS = process.env.REACT_APP_POSITIONSTACK_KEYS;
  const res = await fetch(
    `https://api.positionstack.com/v1/forward?access_key=${KEYS}&query=${address} ${city}`
  );

  if (res.ok) {
    const geoCodes = await res.json();
    return geoCodes;
  }
};
