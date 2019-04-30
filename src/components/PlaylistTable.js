import React from "react";

const PlaylistTable = props => (
  <div className="playlist">
    <header>
      <div>Album Art</div>
      <div>Playlist Title</div>
    </header>
    <ul>{props.children}</ul>
  </div>
);
export default PlaylistTable;
