import React from "react";

const PlaylistLibrary = props => (
  <div className="playlist">
    <header>
      <div>User Name</div>
      <div>Playlists</div>
    </header>
    <ul>{props.children}</ul>
  </div>
);
export default PlaylistLibrary;
