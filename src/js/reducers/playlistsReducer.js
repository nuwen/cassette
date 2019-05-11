import {
  FETCH_USER_PLAYLISTS,
  FETCH_PLAYLIST_SONGS
} from "../constants/action-types";

const initialState = {
  userPlaylists: {},
  currentPlaylist: {}
};

function playlistsReducer(state = initialState, action) {
  if (action.type === FETCH_USER_PLAYLISTS) {
    return Object.assign({}, state, {
      userPlaylists: Object.assign({}, state.userPlaylists, action.payload)
    });
  }

  if (action.type === FETCH_PLAYLIST_SONGS) {
    return Object.assign({}, state, {
      currentPlaylist: Object.assign({}, state.currentPlaylist, action.payload)
    });
  }

  return state;
}

export default playlistsReducer;
