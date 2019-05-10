import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import queryString from "query-string";
import Navigation from "./components/Navigation";
import Controls from "./components/Controls";
import Login from "./components/Login";
import MyPlaylists from "./components/MyPlaylists";
import Playlist from "./components/Playlist";
import { fetchUserData } from "./js/actions/index.js";
import { fetchPlaylistsData } from "./js/actions/index.js";
import { saveAccessToken } from "./js/actions/index.js";
import UserIndex from "./components/UserIndex";
import Hamburger from "./components/Hamburger";

export class App extends Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    // eslint-disable-next-line
    let refreshToken = parsed.refresh_token;
    this.props.saveAccessToken(accessToken);
    this.props.fetchUserData(accessToken);
    this.props.fetchPlaylistsData(accessToken);
  }

  render() {
    console.log(this.props.accessToken);
    // eslint-disable-next-line
    let accessTokenQuery = this.props.accessToken
      ? "?access_token=" + this.props.accessToken
      : "";
    if (!this.props.accessToken) {
      return (
        <div className="App">
          <div className="container">
            <Hamburger />
            <Login path="/" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Hamburger />
          <div className="container">
            <Navigation />
            <Router id="appRouter">
              <UserIndex path="/" />
              <MyPlaylists path="/my-playlists" />
              <Playlist path="/playlist/:playlistId" />
            </Router>
            <Controls />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData,
    accessToken: state.user.accessToken
  };
};

export default connect(
  mapStateToProps,
  { fetchUserData, saveAccessToken, fetchPlaylistsData }
)(App);
