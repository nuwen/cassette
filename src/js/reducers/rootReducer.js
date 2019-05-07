import { combineReducers } from "redux";
import user from "./userReducer";
import playlists from "./playlistsReducer";
import { reducer as burgerMenu } from "redux-burger-menu";
// import songs from "./songsReducer";

export default combineReducers({
  user,
  playlists,
  burgerMenu
});
