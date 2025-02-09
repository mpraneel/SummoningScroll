import React, { useState } from "react";
import DashboardNavbar from "../components/DashboardNavbar";
import "../styles/Inventory.css";

const Inventory = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Set the selected item
  };

  const closeModal = () => {
    setSelectedItem(null); // Close the modal
  };

  // Placeholder inventory items
const inventoryItems = [
    { id: 1, icon: "/RizzsawsEnergyKatana.png", name: "Sword of Justice" },
    { id: 2, icon: "/potion.png", name: "Potion of Healing" },
    { id: 3, icon: "/shield.png", name: "Shield of Valor" },
    { id: 4, icon: "/item-boots.png", name: "Boots of Speed" },
    { id: 5, icon: "/item-helmet.png", name: "Helmet of Wisdom" },
    { id: 6, icon: "/item-gauntlets.png", name: "Gauntlets of Strength" },
    // Add more items as needed
  ];

  return (
    <div className="inventory-page">
      <DashboardNavbar />
      <div className="inventory-container">
        {/* Player Character Box */}
        <div className="player-box">
          <img src="/wizard-avatar.png" alt="Player Avatar" className="player-inv-avatar" />
          <div className="player-info">
            <h3>Sir Lancelot</h3>
            <p>Level: 5</p>
            <p>XP: 450</p>
            <p>Gold: 300</p>
          </div>
        </div>

        {/* Inventory Grid */}
        <div className="inventory-grid">
          {inventoryItems.map((item) => (
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
              <button onClick={() => alert(`Used ${selectedItem.name}`)}>
                Use
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Inventory;