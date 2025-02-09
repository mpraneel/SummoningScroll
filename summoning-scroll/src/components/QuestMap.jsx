import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import "../styles/QuestList.css"; 
import markerIcon from "../images/quest-marker.png"; // Import image

const mapContainerStyle = {
  width: "80%",
  maxWidth: "800px",
  height: "50vh",
  minHeight: "300px",
  margin: "20px auto",
  borderRadius: "10px",
  border: "3px solid #8b0000",
};

const QuestMap = ({ userLocation, quests }) => {
  const [selectedQuest, setSelectedQuest] = useState(null);

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
          url: markerIcon, // Use local image
          scaledSize: new window.google.maps.Size(50, 50), // Resize marker
        }}
      />

      {/* Quest Markers */}
      {quests.map((quest, index) => (
        <Marker
          key={index}
          position={{ lat: quest.location.lat, lng: quest.location.lng }}
          icon={{
            url: "/castle.png",
            scaledSize: new window.google.maps.Size(40, 40),
          }}
          title={quest.title}
          onClick={() => setSelectedQuest(quest)}
        />
      ))}

      {/* Info Window for Selected Quest */}
      {selectedQuest && (
        <InfoWindow
          position={{
            lat: selectedQuest.location.lat,
            lng: selectedQuest.location.lng,
          }}
          onCloseClick={() => setSelectedQuest(null)}
        >
          <div>
            <h3>{selectedQuest.title}</h3>
            <p>{selectedQuest.description}</p>
            <p><strong>Location:</strong> {selectedQuest.place}</p>
            <a
              href={selectedQuest.website}
              target="_blank"
              rel="noopener noreferrer"
              className="apply-link"
            >
              <button>Apply</button>
            </a>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default QuestMap;
