import React, { Component } from "react";
import { connect } from "react-redux";
// import uuidv1 from "uuid";
import { createPlaylist } from "../../js/actions/index";

class CreatePlaylistForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      collaborative: true,
      public: false
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
    const { name, description } = this.state;
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={this.handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="textarea"
            className="form-control"
            id="description"
            value={description}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          Create Playlist
        </button>
      </form>
    );
  }
}
const mapStateToProps = state => {
  return {
    userID: state.user.userData.id
  };
};
export default connect(
  mapStateToProps,
  { createPlaylist }
)(CreatePlaylistForm);
