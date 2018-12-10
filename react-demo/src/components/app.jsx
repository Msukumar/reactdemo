import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FormComponent from "./form";
import Home from "./home";
import About from "./about";
import NavBar from "./navBar";

class AppComponent extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/UserForm" />} />
            <Route path="/Home" component={Home} exact />
            <Route path="/UserForm" component={FormComponent} />
            <Route path="/About" component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
