import React from "react";
import "../styles/Leaderboard.css"; // Create this CSS file for styling

const Leaderboard = () => {
  // Mock leaderboard data
  const players = [
    { rank: 1, username: "KnightKing", xp: 1200 },
    { rank: 2, username: "MageQueen", xp: 1100 },
    { rank: 3, username: "RogueShadow", xp: 1050 },
    { rank: 4, username: "HealerHeart", xp: 980 },
    { rank: 5, username: "TankTitan", xp: 920 },
  ];

  return (
    <div className="leaderboard-box">
   <h2 className="leaderboard-title">Leaderboard</h2>
   <ul className="leaderboard-list">
      {players.map((player) => (
         <li key={player.rank} className="leaderboard-item">
            <span className="player-rank">#{player.rank}</span>
            <span className="player-name">{player.username}</span>
            <span className="player-xp">{player.xp} XP</span>
         </li>
      ))}
   </ul>
</div>
  );
};

export default Leaderboard;
