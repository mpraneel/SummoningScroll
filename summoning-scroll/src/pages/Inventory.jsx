import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Inventory.css";

// Placeholder player data
const playerData = {
  name: "MysticSorcerer42",
  level: 5,
  gold: 300,
  avatar: "/wizard-avatar.png", // Path to the player avatar image
};

// Placeholder inventory items with sell prices
const inventoryItems = [
  { id: 1, icon: "/RizzsawsEnergyKatana.png", name: "Sword of Justice", sellPrice: 50 },
  { id: 2, icon: "/potion.png", name: "Potion of Healing", sellPrice: 20 },
  { id: 3, icon: "/shield.png", name: "Shield of Valor", sellPrice: 40 },
  { id: 4, icon: "/bootsOfSpeed.png", name: "Boots of Speed", sellPrice: 30 },
  { id: 5, icon: "/helm.png", name: "Helmet of Wisdom", sellPrice: 35 },
  { id: 6, icon: "/gauntlets.png", name: "Gauntlets of Strength", sellPrice: 25 },
  // Add more items as needed
];

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [player, setPlayer] = useState(playerData);
  const [inventory, setInventory] = useState(inventoryItems);

  // Handle item click
  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item
  };

  // Close the modal
  const closeModal = () => {
    setSelectedItem(null); // Close the modal
  };

  // Handle selling an item
  const handleSellItem = (item) => {
    // Increase player's gold by the item's sell price
    setPlayer((prevPlayer) => ({
      ...prevPlayer,
      gold: prevPlayer.gold + item.sellPrice,
    }));

    // Remove the item from the inventory
    setInventory((prevInventory) =>
      prevInventory.filter((invItem) => invItem.id !== item.id)
    );

    alert(`You sold ${item.name} for ${item.sellPrice} gold!`);
    closeModal(); // Close the modal after selling
  };

  return (
    <div className="inventory-page">
      <DashboardNavbar />
      <div className="inventory-container">
        {/* Player Character Box */}
        <div className="player-box">
          <img src={player.avatar} alt="Player Avatar" className="player-avatar" />
          <div className="player-info">
            <h3>{player.name}</h3>
            <p>Level: {player.level}</p>
            <p>Gold: {player.gold}</p>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="inventory-grid">
          {inventory.map((item) => (
            <button
              key={item.id}
              className="inventory-slot"
              onClick={() => handleItemClick(item)}
            >
              <img src={item.icon} alt={item.name} className="item-icon" />
              <span className="item-name">{item.name}</span>
            </button>
          ))}
        </div>

        {/* Modal for Selected Item */}
        {selectedItem && (
          <div className="modal-overlay">
            <div className="modal">
              <h3>{selectedItem.name}</h3>
              <img
                src={selectedItem.icon}
                alt={selectedItem.name}
                className="modal-icon"
              />
              <p>What would you like to do with this item?</p>
              <button onClick={closeModal}>Close</button>
              <button onClick={() => alert(`Equipped ${selectedItem.name}`)}>
                Equip
              </button>
              <button onClick={() => handleSellItem(selectedItem)}>Sell</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;