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
  const [userXP, setUserXP] = useState(0);

  // Mock quests data
  const quests = [
    {
      title: "Save the Forest",
      description: "Plant trees in Pullen Park.",
      place: "Pullen Park",
      location: { lat: 35.7852, lng: -78.6625 },
      website: "https://example.com/save-the-forest",
      code: "FOREST123",
    },
    {
      title: "Feed the Hungry",
      description: "Serve meals at Shepherd's Table Soup Kitchen.",
      place: "Shepherd's Table Soup Kitchen",
      location: { lat: 35.7764, lng: -78.6394 },
      website: "https://example.com/feed-the-hungry",
      code: "HUNGRY456",
    },
    {
      title: "Cleanup Crew",
      description: "Help clean up the Walnut Creek Wetland Park.",
      place: "Walnut Creek Wetland Park",
      location: { lat: 35.7642, lng: -78.6231 },
      website: "https://example.com/cleanup-crew",
      code: "CLEAN789",
    },
    {
      title: "Community Garden Helper",
      description: "Assist in growing vegetables and flowers at the NC State Farmers Market Garden.",
      place: "NC State Farmers Market Garden",
      location: { lat: 35.7651, lng: -78.6623 },
      website: "https://example.com/community-garden",
      code: "GARDEN101",
    },
    {
      title: "Animal Shelter Volunteer",
      description: "Assist with caring for rescued animals at SPCA of Wake County.",
      place: "SPCA of Wake County",
      location: { lat: 35.7283, lng: -78.6466 },
      website: "https://example.com/animal-shelter",
      code: "ANIMAL321",
    },
    {
      title: "Park Cleanup",
      description: "Help remove litter and maintain walking trails in Nash Square Park.",
      place: "Nash Square Park",
      location: { lat: 35.7791, lng: -78.6439 },
      website: "https://example.com/park-cleanup",
      code: "PARK555",
    },
    {
      title: "Library Book Sorter",
      description: "Assist with organizing books and helping visitors at the Cameron Village Library.",
      place: "Cameron Village Library",
      location: { lat: 35.7870, lng: -78.6633 },
      website: "https://example.com/library-helper",
      code: "BOOK789",
    },
    {
      title: "Food Pantry Helper",
      description: "Sort and distribute food at the Raleigh Food Bank.",
      place: "Raleigh Food Bank",
      location: { lat: 35.7793, lng: -78.6525 },
      website: "https://example.com/food-pantry",
      code: "FOOD999",
    },
    {
      title: "Tech Tutor for Seniors",
      description: "Teach basic computer and smartphone skills to seniors at Five Points Center for Active Adults.",
      place: "Five Points Center for Active Adults",
      location: { lat: 35.8012, lng: -78.6442 },
      website: "https://example.com/tech-tutor",
      code: "TECH777",
    },
    {
      title: "After-School Tutor",
      description: "Help elementary school kids with reading and homework at Raleigh Community Center.",
      place: "Raleigh Community Center",
      location: { lat: 35.7705, lng: -78.6802 },
      website: "https://example.com/tutor-kids",
      code: "TUTOR222",
    },
    {
      title: "Community Recycling Initiative",
      description: "Assist with sorting and recycling waste at the Raleigh Recycling Center.",
      place: "Raleigh Recycling Center",
      location: { lat: 35.7688, lng: -78.6583 },
      website: "https://example.com/recycling-helper",
      code: "RECYCLE888",
    },
    {
      title: "Homeless Shelter Assistance",
      description: "Prepare meals and distribute essentials at the Raleigh Rescue Mission.",
      place: "Raleigh Rescue Mission",
      location: { lat: 35.7741, lng: -78.6382 },
      website: "https://example.com/homeless-help",
      code: "HELP444",
    },
  ];
  

  const addXP = (xp) => {
    setUserXP(userXP + xp);
  };

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
          <span> XP: { userXP } / 500 </span>
        </div>
        <div className="map-container">
          <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
            {userLocation && (
              <QuestMap userLocation={userLocation} quests={quests} />
            )}
          </LoadScript>
        </div>
        <div className="leaderboard-wrapper">
          <Leaderboard />
        </div>
      </div>
      <QuestList quests={quests} addXP={addXP} />
      <div className="xp-display">XP: {userXP}</div>
    </div>
  );
};

export default Dashboard;
