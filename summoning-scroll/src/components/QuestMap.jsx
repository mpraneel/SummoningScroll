import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "80vh", 
  minHeight: "400px",
};

const QuestMap = ({ userLocation, quests }) => {
  if (!userLocation) return <div>Loading user location...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={14}
      center={userLocation}
    >
      {/* User's Location Marker */}
      <Marker
        position={userLocation}
        icon={{
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        }}
      />

      {/* Quest Markers */}
      {quests.map((quest) => (
        <Marker
          key={quest.id}
          position={{ lat: quest.location.lat, lng: quest.location.lng }}
          title={quest.title}
        />
      ))}
    </GoogleMap>
  );
};

export default QuestMap;
