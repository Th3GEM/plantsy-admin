import React, { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPlant = { name, image, price: parseFloat(price) };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then(onAddPlant);

    setName("");
    setImage("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a New Plant</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Image URL" value={image} onChange={e => setImage(e.target.value)} />
      <input placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
      <button type="submit">Add Plant</button>
    </form>
  );
}

export default PlantForm;