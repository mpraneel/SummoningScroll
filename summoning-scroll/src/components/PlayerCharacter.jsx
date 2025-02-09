import React from "react";
import "../styles/PlayerCharacter.css";

const PlayerCharacter = ({ username }) => {
  return (
    <div className="player-character-box">
      <h2 className="player-username">{username}</h2>
      <img
        src="/wizard-avatar.png" /* Access image from public */
        alt="Pixel Wizard"
        className="player-avatar"
      />
    </div>
  );
};

export default PlayerCharacter;
