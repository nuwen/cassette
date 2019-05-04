import { combineReducers } from "redux";
import user from "./userReducer";
import playlists from "./playlistsReducer";
// import songs from "./songsReducer";

export default combineReducers({
  user,
  playlists
});
