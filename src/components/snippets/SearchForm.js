import React, { Component } from "react";
import { connect } from "react-redux";
import { sendQuery } from "../../js/actions/spotify";
import { navigate } from "@reach/router";

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      filter: { album: false, artist: false, playlist: false, track: true }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleCheckboxChange(event) {
    let filter = { ...this.state.filter };
    filter[event.target.id] = !this.state.filter[event.target.id];
    this.setState({ filter });
  }

  handleSubmit(event) {
    event.preventDefault();

    sendQuery(this.props.accessToken, this.state);
    navigate("/search?access_token=" + this.props.accessToken);

    this.setState({
      name: "",
      filter: { album: false, artist: false, playlist: false, track: true }
    });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="searchForm">
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="searchForm__textbox">
            <label htmlFor="name"> </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
              placeholder="Search.."
            />
          </div>
          <div className="searchForm__checkboxes">
            <div className="searchForm__options">
              <div className="searchForm__checkbox">
                <input
                  id="track"
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                  defaultChecked={this.state.filter.track}
                />
                <label htmlFor="track">Track</label>
              </div>
              <div className="searchForm__checkbox">
                <input
                  id="album"
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                  defaultChecked={this.state.filter.album}
                />
                <label htmlFor="album">Album</label>
              </div>
              <div className="searchForm__checkbox">
                <input
                  id="artist"
                  type="checkbox"
                  onChange={this.handleCheckboxChange}
                  defaultChecked={this.state.filter.artist}
                />
                <label htmlFor="artist">Artist</label>
              </div>
            </div>
          </div>
          <button type="submit" className="searchForm_submit">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { sendQuery }
)(SearchForm);
