import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import NavBar from "./pages/NavBar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </BrowserRouter>,
  );