import React from "react";
import CreatePlaylistForm from "../snippets/CreatePlaylistForm";

const CreatePlaylist = ({ accessToken }) => {
  return (
    <div className="createPlaylist">
      <h1>Create Playlist</h1>
      <CreatePlaylistForm accessToken={accessToken} />
    </div>
  );
};

export default CreatePlaylist;
