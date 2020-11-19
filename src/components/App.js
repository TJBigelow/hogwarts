import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
import Hog from "./Hog";

class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: "all",
      hogs: hogs,
    };
  }

  filter = () => {
    this.state.filter === "all"
      ? this.setState({
          hogs: this.state.hogs.filter((hog) => hog.greased),
          filter: "greased",
        })
      : this.setState({
          hogs: hogs,
          filter: "all",
        });
  };

  nameSort = () => {
    this.setState({
      hogs: this.state.hogs.sort(function (a, b) {
        var nameA = a.name.toUpperCase();
        var nameB = b.name.toUpperCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        return 0;
      }),
    });
  };

  weightSort = () => {
    this.setState({
      hogs: this.state.hogs.sort(function (a, b) {
        return a.weight - b.weight;
      }),
    });
  };

  renderHogs = (hogs) => {
    console.table(hogs);
    return hogs.map((hog) => {
      return <Hog key={hog.name} hog={hog} />;
    });
  };

  render() {
    return (
      <div className="App">
        <Nav
          filter={this.filter}
          nameSort={this.nameSort}
          weightSort={this.weightSort}
        />
        <div className="ui grid container">
          {this.renderHogs(this.state.hogs)}
        </div>
      </div>
    );
  }
}

export default App;
