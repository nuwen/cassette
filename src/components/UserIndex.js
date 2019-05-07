import React from "react";
import { connect } from "react-redux";

const UserIndex = ({ userData }) => {
  return (
    <div>
      <span role="img" aria-label="User Profile Image" />
      <div>{userData.display_name}</div>
      {userData.images ? (
        <img
          src={userData.images[0].url}
          alt={userData.display_name + "'s Profile Image"}
        />
      ) : (
        ""
      )}
      <div>
        <a href="/playlists">
          <button>My Playlists</button>
        </a>
        <a href="/new-playlist">
          <button>Create New Playlist</button>
        </a>
        <a href="/playlist-code">
          <button>Enter Playlist Code</button>
        </a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData
});
export default connect(mapStateToProps)(UserIndex);
