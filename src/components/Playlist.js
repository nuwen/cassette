import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPlaylistData } from "../js/actions/index";
import Song from "./Song";

const Playlist = ({
  fetchPlaylistData,
  accessToken,
  playlistId,
  currentPlaylist
}) => {
  useEffect(() => {
    if (!currentPlaylist.id && playlistId !== currentPlaylist) {
      fetchPlaylistData(accessToken, playlistId);
    }
  });

  if (currentPlaylist.id) {
    const {
      name,
      owner: { display_name } = "no name",
      images,
      tracks
    } = currentPlaylist;
    return (
      <div className="playlist">
        <header>
          <div className="playlist__image">
            <img src={images[1].url} alt="Playlist" />
          </div>
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
    return <div>Fetching playlist!</div>;
  }
};
const mapStateToProps = state => {
  return {
    accessToken: state.user.accessToken,
    currentPlaylist: state.playlists.currentPlaylist
  };
};
// eslint-disable-next-line
const mapDispatchToProps = () => ({ fetchPlaylistData });
export default connect(
  mapStateToProps,
  { fetchPlaylistData }
)(Playlist);
