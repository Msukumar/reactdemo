import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import FormComponent from "./form";
import Home from "./home";
import About from "./about";
import NavBar from "./navBar";
import ComponentLifeCycle from './componentlifecyclehooks'
import ContactUs from './contactUs'
class AppComponent extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/Home" />} />
            <Route path="/Home" component={Home} exact />
            <Route path="/UserForm" component={FormComponent} />
            <Route path="/ContactUs" component= {ContactUs}/>
            <Route path="/About" component={About} />
            <Route path="/ReactComponentLifeCycle" component={ComponentLifeCycle} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
