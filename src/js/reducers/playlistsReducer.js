import {
  FETCH_USER_PLAYLISTS,
  FETCH_PLAYLIST_SONGS,
  CREATE_PLAYLIST
} from "../constants/action-types";

const initialState = {
  userPlaylists: {},
  currentPlaylist: {},
  createdPlaylistID: {}
};

function playlistsReducer(state = initialState, action) {
  if (action.type === FETCH_USER_PLAYLISTS) {
    return Object.assign({}, state, {
      userPlaylists: action.payload
    });
  }

  if (action.type === FETCH_PLAYLIST_SONGS) {
    return Object.assign({}, state, {
      currentPlaylist: action.payload
    });
  }
  if (action.type === CREATE_PLAYLIST) {
    return Object.assign({}, state, {
      createdPlaylistID: action.payload
    });
  }

  return state;
}

export default playlistsReducer;
