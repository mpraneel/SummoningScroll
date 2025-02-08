import React, { useEffect, useState, useContext } from "react";
import Navbar from "../components/Navbar";
import QuestMap from "../components/QuestMap";
import { QuestContext } from "../context/QuestContext";
import { LoadScript } from "@react-google-maps/api";

const Dashboard = () => {
  const { quests, fetchQuests } = useContext(QuestContext);
  const [userLocation, setUserLocation] = useState(null);

  // Fetch quests from Firebase on component mount
  useEffect(() => {
    fetchQuests();
  }, [fetchQuests]);

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
    </div>
  );
};

export default Dashboard;