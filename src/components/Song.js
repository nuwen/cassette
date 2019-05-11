import React from "react";

const Song = ({ artists, name, uri }) => {
  let artistNames = [];
  let joinedNames = [];
  let verboseNames = "";

  artistNames = artists.filter(artist => artist.name);

  artistNames.forEach(artist => {
    if (artist.name) {
      joinedNames.push(artist.name);
    }
  });

  if (joinedNames.length === 1) {
    verboseNames = joinedNames.join();
  }
  if (joinedNames.length === 2) {
    verboseNames = joinedNames.join(" & ");
  }
  if (joinedNames.length > 2) {
    verboseNames = joinedNames.join(", ");
  }

  // let joinedNames = artistNames.
  return (
    <li className="song">
      <div className="song__details">
        <div className="song__title">{name}</div>
        <div className="song__artist">{verboseNames}</div>
      </div>
      <a
        className="song__link"
        alt={`Add ${name} to your Spotify Library}`}
        href={uri}
      >
        <button>+</button>
      </a>
    </li>
  );
};

export default Song;
