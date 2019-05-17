import React, { Component } from "react";

import cassette from "../cassette_image.svg";
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
      <div className="login">
        <img className="login__cassette" alt="Logo" src={cassette} />
        <div>Login and start creating lists with friends.</div>
        <button className="button button--wide" onClick={this.loginButton}>
          Sign in with Spotify!
        </button>
        {/* <button className="button">Button</button>
        <button className="button button--wide">Button</button>
        <button className="button button--extra-wide">Button</button>
        <button className="button button--inverse">Button</button>
        <button className="button button--wide button--inverse">Button</button>
        <button className="button button--extra-wide button--inverse">
          Button
        </button> */}
      </div>
    );
  }
}

export default Login;
