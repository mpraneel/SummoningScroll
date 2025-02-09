import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestMap from "../components/QuestMap";
import QuestList from "../components/QuestList";
import { LoadScript } from "@react-google-maps/api";

const Dashboard = () => {
  const [userLocation, setUserLocation] = useState(null);

  // Mock quests data
  const quests = [
    {
      title: "Save the Forest",
      description: "Plant trees in the park",
      location: { lat: 35.7847, lng: -78.6821 },
    },
    {
      title: "Feed the Hungry",
      description: "Serve meals at the shelter",
      location: { lat: 35.7741, lng: -78.6330 },
    },
  ];

  // Get user's current location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error fetching user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="dashboard">
      <Navbar />
      <div className="map-container">
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          {userLocation && (
            <QuestMap userLocation={userLocation} quests={quests} />
          )}
        </LoadScript>
      </div>
      <QuestList quests={quests} /> {/* ✅ Added Quest List Below Map */}
    </div>
  );
};

export default Dashboard;
