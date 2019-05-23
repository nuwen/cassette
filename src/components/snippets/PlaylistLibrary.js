import React from "react";
import { connect } from "react-redux";
import { updateLoadingState } from "../../js/actions/index";

const PlaylistLibrary = ({
  userPlaylists,
  accessToken,
  updateLoadingState
}) => {
  if (!userPlaylists.items) {
    updateLoadingState(true);
    return <div />;
  } else {
    updateLoadingState(false);
    // eslint-disable-next-line
    let filteredList = userPlaylists.items.filter(list => list.collaborative);
    let playlists = userPlaylists.items.map(item => {
      if (item.name === " " || "") {
        return (
          <li key={item.id}>
            <a href={"/playlist/" + item.id + "?access_token=" + accessToken}>
              No name found.
            </a>
          </li>
        );
      } else {
        return (
          <li key={item.id}>
            <a href={"/playlist/" + item.id + "?access_token=" + accessToken}>
              {item.name}
            </a>
          </li>
        );
      }
    });
    return (
      <div>
        <h1>My Playlists</h1>
        <ul className="playlistTable">{playlists}</ul>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  userPlaylists: state.playlists.userPlaylists,
  accessToken: state.user.accessToken
});
export default connect(
  mapStateToProps,
  { updateLoadingState }
)(PlaylistLibrary);
