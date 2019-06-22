import React from "react";
import { connect } from "react-redux";

const UserIndex = ({ userData, accessToken }) => {
  let accessTokenQuery = "?access_token=" + accessToken;
  let buttons = [
    {
      url: "/my-playlists",
      text: "My Playlists"
    },
    {
      url: "/create-playlist",
      text: "Create New Playlists"
    },
    {
      url: "/enter-playlist-code",
      text: "Enter Playlist Code"
    }
  ];

  return (
    <div className="userIndex">
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
      <div className="userIndex__buttons">
        {buttons.map((button, index) => (
          <a key={index} href={button.url + accessTokenQuery}>
            <button>{button.text}</button>
          </a>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  userData: state.user.userData,
  accessToken: state.user.accessToken
});
export default connect(mapStateToProps)(UserIndex);
