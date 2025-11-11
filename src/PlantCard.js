import React from "react";

function PlantCard({ plant, onToggleSoldOut }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <img src={plant.image} alt={plant.name} width="150" />
      <h3>{plant.name}</h3>
      <p>Price: ${plant.price}</p>
      <button onClick={() => onToggleSoldOut(plant.id)}>
        {plant.soldOut ? "Undo Sold Out" : "Mark as Sold Out"}
      </button>
    </div>
  );
}

export default PlantCard;