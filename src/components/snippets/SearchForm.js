import React, { Component } from "react";

class SearchFrom extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      album: false,
      artist: false,
      playlist: false,
      track: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const playlist = this.state;

    this.props.createPlaylist(
      this.props.accessToken,
      this.props.userID,
      playlist
    );
    this.setState({ name: "", description: "" });
  }
  render() {
    const { name } = this.state;
    return (
      <div className="searchForm">
        <form>
          <div className="form-group">
            <label htmlFor="name"> </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchFrom;
