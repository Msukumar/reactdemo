import React, { Component } from "react";
class FormComponent extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Welcome to react world {this.props.guest}</h1>
      </div>
    );
  }
}

export default FormComponent;
