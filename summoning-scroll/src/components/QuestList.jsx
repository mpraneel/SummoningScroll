import React from "react";
import "../styles/QuestList.css"; 
import parchmentTexture from "../images/parchment-texture.jpeg";

const QuestList = ({ quests }) => {
  return (
    <div
      className="quest-list"
      style={{
        backgroundImage: `url(${parchmentTexture})`, 
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2>Available Quests</h2>
      <div className="quest-grid">
        {quests.map((quest, index) => (
          <div key={index} className="quest-item">
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestList;
