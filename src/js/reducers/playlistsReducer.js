import { FETCH_USER_PLAYLISTS } from "../constants/action-types";

const initialState = {
  userPlaylists: {}
};

function playlistsReducer(state = initialState, action) {
  if (action.type === FETCH_USER_PLAYLISTS) {
    return Object.assign({}, state, {
      userPlaylists: Object.assign({}, state.userPlaylists, action.payload)
    });
  }
  return state;
}

export default playlistsReducer;
