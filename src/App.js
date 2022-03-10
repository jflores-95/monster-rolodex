import "./App.css";
import React, { useEffect, useState } from "react";
import CardListComponent from "./components/card-list/card-list.component";
import SearchboxComponent from "./components/search-box/searchbox.component";

const App = () => {
  const [searchBox, setSearchBox] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState([]);

  console.log("RENDER");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchBox)
    );

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchBox]);

  const handleChange = (e) => {
    setSearchBox(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchboxComponent
        placeholder={"Search monsters"}
        handleChange={handleChange}
      />
      <CardListComponent monsters={filteredMonsters} />
    </div>
  );
};

export default App;
