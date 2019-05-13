import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlaylistData, updateLoadingState } from "../js/actions/index";
import Song from "./Song";

const Playlist = ({
  fetchPlaylistData,
  accessToken,
  playlistId,
  currentPlaylist,
  updateLoadingState
}) => {
  useEffect(() => {
    if (!currentPlaylist.id && playlistId !== currentPlaylist) {
      fetchPlaylistData(accessToken, playlistId);
    }
  });

  if (currentPlaylist.id) {
    updateLoadingState(false);
    const {
      name,
      owner: { display_name } = "no name",
      images,
      tracks
    } = currentPlaylist;
    return (
      <div className="playlist">
        <header className="playlist__header">
          <img className="playlist__image" src={images[0].url} alt="Playlist" />
          <div className="playlist__details">
            <div>{name}</div>
            <div>by {display_name}</div>
          </div>
        </header>
        <ul>
          {tracks.items.map(({ track }) => (
            <Song key={track.id} {...track} />
          ))}
        </ul>
      </div>
    );
  } else {
    updateLoadingState(true);
    return <div />;
  }
};
const mapStateToProps = state => {
  return {
    accessToken: state.user.accessToken,
    currentPlaylist: state.playlists.currentPlaylist,
    isLoading: state.isLoading
  };
};
// eslint-disable-next-line
const mapDispatchToProps = () => ({ fetchPlaylistData });
export default connect(
  mapStateToProps,
  { fetchPlaylistData, updateLoadingState }
)(Playlist);
