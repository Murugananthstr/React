import React, { Component } from "react";
class Signin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    // this.setState({ email: e.target.value });
    this.setState({ [e.target.id]: e.target.value });
  };

  handleOnSubmit = (e) => {
    console.log("Email :", this.state);
    e.preventDefault();
  };

  render() {
    return (
      <>
        <div className="px-4 mx-auto">
          <form className="container" autoComplete="off">
            <legend>
              <h4>Sign In</h4>
            </legend>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Enter Email
              </label>
              <input type="email" className="form-control" id="email" onBlur={this.handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Enter Password
              </label>
              <input type="password" autoComplete="off" className="form-control" id="password" onBlur={this.handleChange} />
            </div>
            <button type="submit" className="btn btn-primary" onSubmit={this.handleOnSubmit}>
              Sign In
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Signin;
