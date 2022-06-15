import React from "react";
import { Route } from "react-router-dom";

import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Stock from "./components/Stock";

import data from "./data";

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/about">
        <About/>
      </Route>

      <Route path="/stock">
        <Dashboard/>
      </Route>

      <Route path="/stock/:symbol">
        <Stock/>
      </Route>
    </div>
  );
};

export default App;
