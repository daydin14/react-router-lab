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

function App(props) {
  return (
    <div className="App">
      <Nav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/about">
        <About />
      </Route>

      <Route path="/stocks"
            render={props => <Dashboard {...props} stockData={data}/>}>
      </Route>

      <Route path="/stocks/:symbol"
            render={props => <Stock stockData={data} {...props} />}>
      </Route>
    </div>
  );
}

export default App;
