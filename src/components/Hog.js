import React, { Component } from "react";

export default class Hog extends Component {
  constructor() {
    super();
    this.state = {
      clicked: false,
      shown: true,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  handleHide = () => {
    this.setState({
      shown: !this.state.shown,
    });
  };

  render() {
    let pigImage = require(`../hog-imgs/${this.props.hog.name
      .split(" ")
      .join("_")
      .toLowerCase()}.jpg`);
    if (this.state.shown) {
      return (
        <div className="pigTile ui four wide column" onClick={this.handleClick} style={{height: "192px"}}>
          {this.state.clicked ? (
            <p>
              <h3>{this.props.hog.name}</h3>
              Specialty: {this.props.hog.specialty}
              <br />
              Weight: {this.props.hog.weight}
              <br />
              {this.props.hog.greased ? "Greased" : "Not Greased"}
              <br />
              Highest Medal Achieved: {this.props.hog["highest medal achieved"]}
              <br />
              <button onClick={this.handleHide}>Hide</button>
            </p>
          ) : (
            <div>
              <h3>{this.props.hog.name}</h3>
              <img
                alt={this.props.hog.name}
                src={pigImage}
                style={{ maxWidth: "75%", maxHeight: "150px" }}
              />
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="pigTile ui four wide column" onClick={this.handleClick} style={{height: "192px"}}>
            <button onClick={this.handleHide}>Un-hide {this.props.hog.name}</button>
        </div>
      );
    }
  }
}
