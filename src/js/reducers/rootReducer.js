import { combineReducers } from "redux";
import user from "./userReducer";
import playlists from "./playlistsReducer";
import search from "./searchReducer";
import { reducer as burgerMenu } from "redux-burger-menu";
import { UPDATE_LOADING_STATE } from "../constants/action-types";
// import songs from "./songsReducer";

const initialState = {
  isLoading: false
};

function root(state = initialState, action) {
  if (action.type === UPDATE_LOADING_STATE) {
    return Object.assign({}, state, {
      isLoading: action.payload
    });
  }

  return state;
}

export default combineReducers({
  root,
  user,
  search,
  playlists,
  burgerMenu
});
