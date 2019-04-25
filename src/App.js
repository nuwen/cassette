import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import Playlist from "./components/Playlist";
import Song from "./components/Song";
import Controls from "./components/Controls";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Playlist>
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
      </Playlist>
      <Controls />
    </div>
  );
}

export default App;
