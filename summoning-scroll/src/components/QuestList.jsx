import React, { useState } from "react";
import "../styles/QuestList.css"; 
import parchmentTexture from "../images/parchment-texture.jpeg";

const QuestList = ({ quests, addXP }) => {
  const [selectedQuest, setSelectedQuest] = useState(null);
  const [code, setCode] = useState("");

  const handleRedeemCode = (quest) => {
    if (code === quest.code) {
      alert(`Code redeemed! You've earned XP for ${quest.title}`);
      addXP(100);
      setSelectedQuest(null);
      setCode(""); // Reset input field
    } else {
      alert("Invalid code. Please try again.");
    }
  };

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
            <h3 className="quest-title" onClick={(e) => {
              e.stopPropagation();
              setSelectedQuest(quest);
            }}>
              {quest.title}
            </h3>
            <p>{quest.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for Redeeming Code */}
      {selectedQuest && (
        <div className="redeem-code-modal">
          <h3>Redeem Code for {selectedQuest.title}</h3>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <button onClick={() => handleRedeemCode(selectedQuest)}>Redeem Code</button>
          <button onClick={() => {
            setSelectedQuest(null);
            setCode("");
          }}>Close</button>
        </div>
      )}
    </div>
  );
};

export default QuestList;
