import React, { Component } from "react";
import PlaylistLibrary from "../snippets/PlaylistLibrary";

class MyPlaylists extends Component {
  render() {
    return (
      <div className="myPlaylists">
        <PlaylistLibrary />
      </div>
    );
  }
}

export default MyPlaylists;
