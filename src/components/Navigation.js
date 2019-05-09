import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation">
        <a className="navigation__item navigation__item-left" href="/">
          Login
        </a>
        <a className="navigation__logo" href="/">
          Mixtapify
        </a>
        <span className="navigation__item navigation__item-right" />
      </nav>
    );
  }
}

export default Navigation;
