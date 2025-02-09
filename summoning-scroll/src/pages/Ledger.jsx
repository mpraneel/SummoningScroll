import React from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Ledger.css"; // CSS for styling the ledger page

// Placeholder event data
const placeholderEvents = [
  {
    id: 1,
    logo: "/event-logo-1.png", // Path to the event logo
    title: "Community Cleanup",
    guild: "Green Earth Initiative",
    date: "2023-10-15",
  },
  {
    id: 2,
    logo: "/event-logo-2.png", // Path to the event logo
    title: "Food Drive",
    guild: "Food for All",
    date: "2023-10-10",
  },
  {
    id: 3,
    logo: "/event-logo-3.png", // Path to the event logo
    title: "Tech Workshop",
    guild: "Tech for Good",
    date: "2023-10-05",
  },
  {
    id: 4,
    logo: "/event-logo-4.png", // Path to the event logo
    title: "Charity Run",
    guild: "Healthy Lives Foundation",
    date: "2023-09-30",
  },
];

const Ledger = () => {
  return (
    <div className="ledger-page">
      <DashboardNavbar /> {/* Reuse the Dashboard Navbar */}
      <div className="ledger-container">
        <h2>Recent Volunteering Events</h2>
        <ul className="events-list">
          {placeholderEvents.map((event) => (
            <li key={event.id} className="event-item">
              <img src={event.logo} alt={`${event.title} logo`} className="event-logo" />
              <div className="event-info">
                <h3>{event.title}</h3>
                <p>
                  <strong>Guild:</strong> {event.guild}
                </p>
                <p>
                  <strong>Date:</strong> {event.date}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Ledger;