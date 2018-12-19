import React, { Component } from "react";
class FormComponent extends Component {

  state = {
    user: {
      name: '',
      email: ''
    }
  }

  componentDidMount() {
    this.setState({user : this.props.location.state.user});
  }
  updateModel = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState(
      {
        [name]: value
      },
      () => {
        console.log("total reuslt ===> ", this.state);
      }
    );
  };

  updatingItem() {
    this.props.updateItem(this.state);
  }
  render() {
     return (

      <div>
        <h1 className="text-center">Online user form</h1>
        <br />
        <form>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                name="name"
                value={this.state.user.name}
                onChange = {this.updateModel}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                name="email"
                value = {this.state.user.email}
                placeholder="Enter Email id"
                onChange={this.updateModel}
              />
            </div>
          </div>
          {/* <div className="form-group row">
            <label className="col-sm-2 col-form-label">Sex</label>
            <div className="col-sm-10">
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      value="Male"
                      checked={this.state.sex === "Male"}
                      onChange={this.updateModel}
                    />
                    <label className="form-check-label">Male</label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="sex"
                      checked={this.state.sex !== "Male"}
                      value="Female"
                      onChange={this.updateModel}
                    />
                    <label className="form-check-label">Female</label>
                  </div>
                </div>
              </div>
            </div> 
          </div>*/}
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
