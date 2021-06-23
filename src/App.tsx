import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";
import { HomePage } from "./pages/home";
import { Profile } from "./pages/profile";
import Header from "./component/header";
import Footer from "./component/footer";
import { Contact } from "./pages/contact";
import "./App.css";

export const App: React.FunctionComponent = () => {
  const Root = styled.div``;

  return (
    <Root>
      <Router>
        <Header />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/contact" component={Contact} />
        <Footer />
      </Router>
    </Root>
  );
};

export default App;
