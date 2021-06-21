import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Blog from "./components/pages/blog";
import SignUp from "./components/pages/SignUp";
import Auth from "./components/pages/Auth";

function App() {
  return (
    <>
   

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />{" "}
          <Route path="/services" component={Services} />{" "}
          <Route path="/blog" component={Blog} />{" "}
          <Route path="/sign-up" component={Auth} />{" "}
        </Switch>{" "}
      </Router>{" "}
    </>
  );
}

export default App;
