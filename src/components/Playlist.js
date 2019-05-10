import React, { Component } from "react";

class Playlist extends Component {
  onComponentDidMount() {
    console.log("test");
  }
  render() {
    return (
      <li className="playlist">
        {this.props.playlistId}
        <div className="playlist__image">img</div>
        <div className="playlist__details">
          <div>Playlist Name</div>
          <div>Playlist Creator - Playlist Songs</div>
        </div>
      </li>
    );
  }
}

export default Playlist;
