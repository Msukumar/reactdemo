import React from "react";
import ReactDom from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import FormComponent from "./components/formComponent";
ReactDom.render(
  <div className="container">
    <FormComponent appName="React" />
  </div>,
  document.getElementById("root")
);
