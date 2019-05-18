import React from "react";
import { connect } from "react-redux";
import CreatePlaylistForm from "../snippets/CreatePlaylistForm";

const CreatePlaylist = () => {
  return (
    <div className="createPlaylist">
      <h1>Create Playlist</h1>
      <CreatePlaylistForm />
    </div>
  );
};

let mapStateToProps = state => {
  return {
    accessToken: state.user.accessToken
  };
};

export default connect(mapStateToProps)(CreatePlaylist);
