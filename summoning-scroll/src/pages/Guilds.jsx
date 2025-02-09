import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Guilds.css";
import castleImage from "../images/castle-icon-map-pin-on-260nw-266533505-ezgif.com-webp-to-jpg-converter-removebg-preview.png";


// Placeholder guild data
const placeholderGuilds = [
  {
    id: 1,
    icon: castleImage, // Path to the icon image
    name: "Green Earth Initiative",
    position: "Volunteer Coordinator",
    location: "Raleigh",
  },
  {
    id: 2,
    icon: castleImage, // Path to the icon image
    name: "Food for All",
    position: "Event Organizer",
    location: "Raleigh",
  },
  {
    id: 3,
    icon: castleImage, // Path to the icon image
    name: "Clean Water Project",
    position: "Fundraising Manager",
    location: "Raleigh",
  },
  {
    id: 4,
    icon: castleImage, // Path to the icon image
    name: "Tech for Good",
    position: "Software Developer",
    location: "Raleigh",
  },
];

const Guilds = () => {
  return (
    <div className="guilds-page">
      <DashboardNavbar />
      <div className="guilds-container">
        <h2>Guilds in Your Area</h2>
        <ul className="guilds-list">
          {placeholderGuilds.map((guild) => (
            <li key={guild.id} className="guild-item">
              <img src={guild.icon} alt={`${guild.name} icon`} className="guild-icon" />
              <div className="guild-info">
                <h3>{guild.name}</h3>
                <p>
                  <strong>Position:</strong> {guild.position}
                </p>
                <p>
                  <strong>Location:</strong> {guild.location}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Guilds;