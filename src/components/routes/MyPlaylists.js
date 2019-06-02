import React, { Component } from "react";
import PlaylistLibrary from "../snippets/PlaylistLibrary";

class MyPlaylists extends Component {
  render() {
    return (
      <div className="myPlaylists">
        <div>
          <div>
            <span role="img" aria-label="User Profile Image">
              💩
            </span>
            <div>Lorem Ipsum.!</div>
          </div>
        </div>
        <PlaylistLibrary />
      </div>
    );
  }
}

export default MyPlaylists;