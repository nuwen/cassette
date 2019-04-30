import React, { Component } from "react";
// import {connect} from 'react-redux';

class Login extends Component {
  constructor() {
    super();

    this.loginButton = this.loginButton.bind(this);
  }
  loginButton() {
    window.location = window.location.href.includes("localhost")
      ? "http://localhost:8888/login"
      : null;
  }

  render() {
    return (
      <div>
        <div>Login and start creating lists with friends.</div>
        <button onClick={this.loginButton}>Login</button>
      </div>
    );
  }
}

export default Login;
