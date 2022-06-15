import React from "react";
import { Route } from "react-router-dom";

import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Stock from "./pages/Stock";

import Nav from "./components/Nav";

import data from "./data";

import "./App.css";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/stocks">
        <Dashboard />
      </Route>

      <Route path="/stocks/:symbol">
        <Stock />
      </Route>
    </div>
  );
}

export default App;
