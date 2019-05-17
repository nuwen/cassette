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
import Loading from "./components/Loading";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      accessToken: ""
    };
  }
  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    let accessToken = parsed.access_token;
    let refreshToken = parsed.refresh_token;
    this.setState({
      accessToken
    });

    if (accessToken) {
      console.log(this.state.accessToken);
      this.props.fetchUserData(accessToken);
      this.props.fetchPlaylistsData(accessToken);
      this.props.saveAccessToken(this.state.accessToken);
      this.setState({
        isLoggedIn: true
      });
    }
  }

  render() {
    if (!this.state.isLoggedIn) {
      return (
        <div className="App">
          <Hamburger />
          <div className="container routeless">
            <Navigation />
            <Login path="/" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Hamburger accessToken={this.props.accessToken} />
          <div className="container">
            <Navigation />
            {this.props.isLoading ? <Loading /> : null}
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
    userData: state.userData,
    accessToken: state.accessToken,
    isLoading: state.isLoading
  };
};
// eslint-disable-next-line
const mapDispatchToProps = state => {
  return {
    fetchUserData,
    saveAccessToken,
    fetchPlaylistsData
  };
};
export default connect(
  mapStateToProps,
  {
    fetchUserData,
    saveAccessToken,
    fetchPlaylistsData
  }
)(App);
