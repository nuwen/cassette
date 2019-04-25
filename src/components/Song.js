import React from "react";

class Song extends React.Component {
  render() {
    return (
      <li className="song">
        <div className="song__details">
          <div className="song__title">Song Title</div>
          <div className="song__artist">Song Artist(s)</div>
        </div>
        <button>+</button>
      </li>
    );
  }
}

export default Song;
