import React from "react";
import { connect } from "react-redux";

const PlaylistLibrary = ({ userPlaylists }) => {
  console.log(userPlaylists);
  if (!userPlaylists.items) {
    return (
      <div>
        <h1>PLAYLISTLIBRARY</h1>
        LOADING..
      </div>
    );
  } else {
    return (
      <div>
        <h1>PLAYLISTLIBRARY</h1>

        <ul className="playlistTable">
          {userPlaylists.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  userPlaylists: state.playlists.userPlaylists
});
export default connect(mapStateToProps)(PlaylistLibrary);
