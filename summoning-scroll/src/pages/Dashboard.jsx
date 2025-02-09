import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import QuestMap from "../components/QuestMap";
import QuestList from "../components/QuestList";
import PlayerCharacter from "../components/PlayerCharacter";
import Leaderboard from "../components/Leaderboard";
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
    {
      title: "Cleanup Crew",
      description: "Help clean up a local trail.",
      location: { lat: 35.7800, lng: -78.6900 },
    },
    {
      title: "Library Organizer",
      description: "Organize books at the local library.",
      location: { lat: 35.7700, lng: -78.6600 },
    },
    {
      title: "Food Drive",
      description: "Distribute food at the community center.",
      location: { lat: 35.7680, lng: -78.6800 },
    },
    {
      title: "Neighborhood Watch",
      description: "Assist with safety patrols in the area.",
      location: { lat: 35.7750, lng: -78.6700 },
    },
    {
      title: "Tech Tutor",
      description: "Help seniors with technology basics.",
      location: { lat: 35.7600, lng: -78.6850 },
    },
    {
      title: "Community Garden",
      description: "Plant and maintain flowers and vegetables.",
      location: { lat: 35.7650, lng: -78.6500 },
    },
    {
      title: "Animal Shelter Volunteer",
      description: "Assist with taking care of rescued animals.",
      location: { lat: 35.7820, lng: -78.6400 },
    },
    {
      title: "School Supply Drive",
      description: "Distribute supplies to underprivileged kids.",
      location: { lat: 35.7700, lng: -78.7100 },
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
        <div className="leaderboard-wrapper"> {/* Wrapper for the leaderboard */}
          <Leaderboard />
        </div>
      </div>
      <QuestList quests={quests} />
    </div>
  );
};

export default Dashboard;
