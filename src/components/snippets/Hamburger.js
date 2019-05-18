import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";

class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu right>
        <a
          id="home"
          className="menu-item"
          href={"/?access_token=" + this.props.accessToken}
        >
          Home
        </a>
        <a
          id="about"
          className="menu-item"
          href={"/my-playlists?access_token=" + this.props.accessToken}
        >
          Playlists
        </a>
        <a
          id="contact"
          className="menu-item"
          href={"/?access_token=" + this.props.accessToken}
        >
          Profile
        </a>
        <a
          id="createPlaylist"
          className="menu-item"
          href={"/create-playlist?access_token=" + this.props.accessToken}
        >
          Create Playlist
        </a>
      </Menu>
    );
  }
}
export default reduxBurgerMenu(Hamburger);
