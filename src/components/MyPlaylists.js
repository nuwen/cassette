import React, { Component } from "react";
import PlaylistLibrary from "./PlaylistLibrary";
import Playlist from "./Playlist";

class MyPlaylists extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <span role="img" aria-label="User Profile Image">
              💩
            </span>
            <div>Lorem Ipsum.</div>
          </div>
        </div>
        <PlaylistLibrary>
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </PlaylistLibrary>
      </div>
    );
  }
}

export default MyPlaylists;
