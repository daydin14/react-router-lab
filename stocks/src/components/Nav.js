import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Home</div>
      </Link>
      <Link to="/about">
        <div>About</div>
      </Link>
      <Link to="/stocks">
        <div>Dashboard/Stocks</div>
      </Link>
      <Link to="/stocks/:symbol">
        <div>Stock Info</div>
      </Link>
    </div>
  );
}

export default Nav;
