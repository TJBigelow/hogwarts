import piggy from "../porco.png";
import React from "react";

const Nav = ({filter, nameSort, weightSort}) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span><br />
      <button onClick={filter}>Filter Greased</button>
      <button onClick={nameSort}>Sort By Name</button>
      <button onClick={weightSort}>Sort By Weight</button>
    </div>
  );
};

export default Nav;
