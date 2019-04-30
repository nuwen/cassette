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

const mapStateToProps = state => {
  return { user: state.user };
};
const ConnectedApp = ({ user }) => {
  if (!user) {
    return <Login path="/" />;
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
};

const App = connect(mapStateToProps)(ConnectedApp);
export default App;
