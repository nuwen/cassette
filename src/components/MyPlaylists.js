import React, { Component } from "react";
import { connect } from "react-redux";
import PlaylistLibrary from "./PlaylistLibrary";

class MyPlaylists extends Component {
  render() {
    return (
      <div>
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

export default connect(null)(MyPlaylists);
