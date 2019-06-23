import React, { useState } from "react";
import { navigate } from "@reach/router";
import { connect } from "react-redux";
import SearchCheckbox from "./SearchCheckbox";

function SearchForm({ accessToken, dispatch }) {
  const [name, setName] = useState("");
  const [track, setTrack] = useState(true);
  const [album, setAlbum] = useState(false);
  const [artist, setArtist] = useState(false);

  let formData = {
    name,
    filter: { track, album, artist }
  };

  let options = Object.keys(formData.filter);

  function handleChange(e) {
    if (e.target.id === "name") {
      setName(e.target.value);
    }

    if (e.target.id === "track") {
      setTrack(!track);
    }
    if (e.target.id === "album") {
      setAlbum(!album);
    }
    if (e.target.id === "artist") {
      setArtist(!artist);
    }
  }

  function resetOptions() {
    setName("");
    setTrack(true);
    setAlbum(false);
    setArtist(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let submission = {
      name,
      filter: { track, album, artist }
    };
    let response = await testQuery(accessToken, submission);
    dispatch({ type: "SAVE_RESULTS", payload: response });
    resetOptions();
    navigate("/search?access_token=" + accessToken);
  }

  // ideally this would be in an action but could not
  // debug why it was not running in dispatch callback
  function testQuery(accessToken, searchObject) {
    let text = searchObject.name.replace(/\s/g, "+");
    let typesArray = Object.keys(searchObject.filter);
    let typesQuery = () => {
      let userFilter = [];
      typesArray.forEach(type => {
        if (searchObject.filter[type]) {
          userFilter.push(type);
        }
      });
      return userFilter.join(",");
    };
    let query = "q=" + text + "&type=" + typesQuery();
    // eslint-disable-next-line
    let url = "https://api.spotify.com/v1/search?market=from_token&" + query;
    async function fetchAync() {
      let response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken
        }
      });
      let data = await response.json();
      return data;
    }
    return fetchAync()
      .then(data => {
        return data;
      })
      .catch(error => console.log(error));
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

export default connect(mapStateToProps)(SearchForm);
