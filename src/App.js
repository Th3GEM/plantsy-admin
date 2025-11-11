import React, { useEffect, useState } from "react";
import PlantForm from "./PlantForm";
import PlantList from "./PlantList";
import SearchBar from "./SearchBar";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then(setPlants);
  }, []);

  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  const handleToggleSoldOut = (id) => {
    setPlants(plants.map(p =>
      p.id === id ? { ...p, soldOut: !p.soldOut } : p
    ));
  };

  const filteredPlants = plants.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>🌱 Plantsy Admin</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <PlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onToggleSoldOut={handleToggleSoldOut} />
    </div>
  );
}

export default App;