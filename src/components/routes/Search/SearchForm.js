import React, { useState } from "react";
import { connect } from "react-redux";
import SearchCheckbox from "./SearchCheckbox";
import { sendQuery } from "../../../js/actions/spotify";

function SearchForm({ accessToken }) {
  const [name, setName] = useState("");
  const [track, setTrack] = useState(true);
  const [album, setAlbum] = useState(false);
  const [artist, setArtist] = useState(false);

  let formData = {
    name: "",
    filter: { track, album, artist }
  };

  let options = Object.keys(formData.filter);

  function handleChange(e) {
    if (e.target.id === "name") {
      formData.name = e.target.value;
      setName(e.target.value);
    }

    if (e.target.id === "track") {
      formData.filter.track = !track;
      setTrack(!track);
    }
    if (e.target.id === "album") {
      formData.filter.album = !album;
      setAlbum(!album);
    }
    if (e.target.id === "artist") {
      formData.filter.artist = !artist;
      setArtist(!artist);
    }
  }

  function resetOptions() {
    setName("");
    setTrack(true);
    setAlbum(false);
    setArtist(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    resetOptions();
    sendQuery(accessToken, formData);
    console.log("submitted");
  }

  return (
    <div className="searchForm">
      <form className="form" onSubmit={handleSubmit}>
        <div className="searchForm__textbox">
          <label htmlFor="name"> </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="Search.."
          />
        </div>
        <div className="searchForm__checkboxes">
          <div className="searchForm__options">
            {options.map(option => (
              <SearchCheckbox
                key={option}
                handleChange={handleChange}
                option={option}
                isChecked={formData.filter[option]}
              />
            ))}
          </div>
        </div>
        <button type="submit" className="searchForm_submit">
          Search
        </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user.userData,
    accessToken: state.user.accessToken
  };
};

export default connect(
  mapStateToProps,
  { sendQuery }
)(SearchForm);
