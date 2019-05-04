import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import queryString from "query-string";
import Navigation from "./components/Navigation";
import PlaylistTable from "./components/PlaylistTable";
import Song from "./components/Song";
import Controls from "./components/Controls";
import Login from "./components/Login";
import MyPlaylists from "./components/MyPlaylists";
import { fetchUserData } from "./js/actions/index.js";
import { fetchPlaylistsData } from "./js/actions/index.js";
import { saveAccessToken } from "./js/actions/index.js";
import UserIndex from "./components/UserIndex";

export class App extends Component {
  componentDidMount() {
    const parsed = queryString.parse(window.location.search);
    const accessToken = parsed.access_token;
    this.props.saveAccessToken(accessToken);
    this.props.fetchUserData(accessToken);
    this.props.fetchPlaylistsData(accessToken);
    console.log(accessToken);
  }

  render() {
    if (this.props.userData.error) {
      return (
        <div className="App">
          <Login path="/" />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navigation />
          <Router>
            <UserIndex path="/" />
            <MyPlaylists path="/playlists" />
            <PlaylistTable path="/playlist">
              <Song />
            </PlaylistTable>
          </Router>
          <Controls />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { userData: state.user.userData };
};

export default connect(
  mapStateToProps,
  { fetchUserData, saveAccessToken, fetchPlaylistsData }
)(App);
