import React from "react";
import { slide as Menu } from "react-burger-menu";
import { decorator as reduxBurgerMenu } from "redux-burger-menu";
import uuidv1 from "uuid";
import { applyAccessTokenURL } from "../../js/utils/index";

class Hamburger extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    let menuItems = [
      {
        id: "home",
        text: "Home",
        className: "",
        url: "/"
      },
      {
        id: "about",
        text: "About",
        className: "",
        url: "/about"
      }
    ];

    let loggedInMenu = [
      {
        id: "profile",
        className: "",
        text: "Profile",
        url: "/"
      },
      {
        id: "playlists",
        className: "",
        text: "My Playlists",
        url: "/my-playlists"
      },
      {
        id: "createPlaylist",
        className: "",
        text: "Create New Playlist",
        url: "/create-playlist"
      },
      {
        id: "about",
        className: "",
        text: "About",
        url: "/about"
      }
    ];

    let renderedMenu;

    if (!this.props.accessToken) {
      renderedMenu = menuItems.map(({ id, className, url, text }) => (
        <a
          id={id}
          key={uuidv1()}
          className={"menu-item " + className}
          href={url}
        >
          {text}
        </a>
      ));
    } else {
      renderedMenu = loggedInMenu.map(({ id, className, url, text }) => (
        <a
          id={id}
          key={uuidv1()}
          className={"menu-item " + className}
          href={applyAccessTokenURL(url, this.props.accessToken)}
        >
          {text}
        </a>
      ));
    }

    return <Menu right>{renderedMenu}</Menu>;
  }
}
export default reduxBurgerMenu(Hamburger);
