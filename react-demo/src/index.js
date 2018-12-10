import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import AppComponent from "./components/app";
ReactDom.render(
  <div className="container">
    <AppComponent />
  </div>,
  document.getElementById("root")
);
