import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-item">Home</div>
      </Link>
      <Link to="/about">
        <div className="nav-item">About</div>
      </Link>
      <Link to="/stocks">
        <div className="nav-item">Dashboard/Stocks</div>
      </Link>
      {/* <Link to="/stocks/:symbol">
        <div className="nav-item">Stock Info</div>
      </Link> */}
    </div>
  );
}

export default Nav;
