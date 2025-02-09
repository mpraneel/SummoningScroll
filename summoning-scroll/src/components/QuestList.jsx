import React from "react";

const QuestList = ({ quests }) => {
  return (
    <div className="quest-list">
      <h2>Available Quests</h2>
      <ul>
        {quests.map((quest, index) => (
          <li key={index}>
            <h3>{quest.title}</h3>
            <p>{quest.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestList;
