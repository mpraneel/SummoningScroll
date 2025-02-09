import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestMap from "../components/QuestMap";
import QuestList from "../components/QuestList";
import PlayerCharacter from "../components/PlayerCharacter";
import { LoadScript } from "@react-google-maps/api";
import "../styles/Dashboard.css";
import DashboardNavbar from "../components/DashboardNavbar";

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
      <DashboardNavbar />
      <div className="dashboard-container">
        <div className="player-character-wrapper">
          <h2 className="player-username">MysticSorcerer42</h2>
          <PlayerCharacter />
        </div>
        <div className="map-container">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            {userLocation && (
              <QuestMap userLocation={userLocation} quests={quests} />
            )}
          </LoadScript>
        </div>
      </div>
      <QuestList quests={quests} />
    </div>
  );
};

export default Dashboard;
