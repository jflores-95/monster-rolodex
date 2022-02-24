import "./App.css";
import React from "react";
import CardListComponent from "./components/card-list/card-list.component";
import SearchboxComponent from "./components/search-box/searchbox.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      console.log(this.state);
    });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: users,
        })
      );
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
    );

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchboxComponent
          placeholder={"Search monsters"}
          handleChange={this.handleChange}
        />
        <CardListComponent monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
