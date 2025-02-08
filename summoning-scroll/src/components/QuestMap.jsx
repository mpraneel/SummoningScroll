import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "calc(100vh - 60px)", // Adjust height to account for Navbar
};

const QuestMap = ({ userLocation, quests }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={userLocation}
    >
      {/* Marker for user's location */}
      <Marker
        position={userLocation}
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        }}
      />

      {/* Markers for quests */}
      {quests.map((quest) => (
        <Marker
          key={quest.id}
          position={{ lat: quest.latitude, lng: quest.longitude }}
          title={quest.title}
        />
      ))}
    </GoogleMap>
  );
};

export default QuestMap;