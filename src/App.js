import React, { Component } from "react";
import "./App.css";
import { Router } from "@reach/router";
import { connect } from "react-redux";
import Navigation from "./components/Navigation";
import PlaylistTable from "./components/PlaylistTable";
import Song from "./components/Song";
import Controls from "./components/Controls";
import Login from "./components/Login";
import MyPlaylists from "./components/MyPlaylists";
import { getFakeData } from "./js/actions/index.js";

export class App extends Component {
  constructor() {
    super();

    this.state = {
      user: null
    };
  }
  componentDidMount() {
    console.log("component loaded");
    setTimeout(() => {
      this.props.getFakeData();
    }, 1000);
  }

  render() {
    if (!this.state.user) {
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
            <MyPlaylists path="/playlists" />
            <PlaylistTable path="/playlist">
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
              <Song />
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
  return { user: state.user };
};

export default connect(
  mapStateToProps,
  { getFakeData }
)(App);
