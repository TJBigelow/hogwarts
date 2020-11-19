import React, { Component } from "react";

export default class Hog extends Component {
  constructor(props) {
    super();
    this.state = {
      clicked: false,
      name: props.hog.name,
      specialty: props.hog.specialty,
      weight: props.hog.weight,
      greased: props.hog.greased,
      medal: props.hog["highest medal achieved"],
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    let pigImage = require(`../hog-imgs/${this.state.name
      .split(" ")
      .join("_")
      .toLowerCase()}.jpg`);

    return (
      <div className="pigTile ui four wide column" onClick={this.handleClick}>
        {this.state.clicked ? (
          <p>
            <h3>{this.state.name}</h3>
            Specialty: {this.state.specialty}<br />
            Weight: {this.state.weight}<br />
            {this.state.greased ? "Greased" : "Not Greased"}<br />
            Highest Medal Achieved: {this.state.medal}<br />
          </p>
        ) : (
          <div>
            <h3>{this.state.name}</h3>
            <img alt={this.state.name} src={pigImage} style={{ width: "150px" }} />
          </div>
        )}
      </div>
    );
  }
}
