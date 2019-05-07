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
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/playlists">
          Playlists
        </a>
        <a id="contact" className="menu-item" href="/profile">
          Profile
        </a>
      </Menu>
    );
  }
}
export default reduxBurgerMenu(Hamburger);
