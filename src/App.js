import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import queryString from "query-string";
import Navigation from "./components/snippets/Navigation";
import Controls from "./components/snippets/Controls";
import Login from "./components/routes/Login";
import MyPlaylists from "./components/routes/MyPlaylists";
import Playlist from "./components/snippets/Playlist";
import { fetchUserData } from "./js/actions/index.js";
import { fetchPlaylistsData } from "./js/actions/index.js";
import { saveAccessToken } from "./js/actions/index.js";
import UserIndex from "./components/routes/UserIndex";
import Hamburger from "./components/snippets/Hamburger";
import Loading from "./components/snippets/Loading";
import CreatePlaylist from "./components/routes/CreatePlaylist";

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
    // eslint-disable-next-line
    let refreshToken = parsed.refresh_token;
    this.setState({
      accessToken
    });

    if (accessToken) {
      this.props.fetchUserData(accessToken);
      this.props.fetchPlaylistsData(accessToken);
      this.props.saveAccessToken(accessToken);
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
            <Navigation isLoggedIn={false} />
            <Login path="/" />
          </div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <Hamburger accessToken={this.state.accessToken} />
          <div className="container">
            <Navigation
              isLoggedIn={true}
              accessToken={this.state.accessToken}
            />
            {this.props.isLoading ? <Loading /> : null}
            <Router id="appRouter">
              <UserIndex path="/" />
              <MyPlaylists path="/my-playlists" />
              <Playlist path="/playlist/:playlistId" />
              <CreatePlaylist
                path="/create-playlist"
                accessToken={this.state.accessToken}
              />
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
