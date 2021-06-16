import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { Profile } from "./pages/profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/profile" component={Profile} />
    </Router>
  );
}

export default App;
