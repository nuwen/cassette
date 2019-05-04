import { FETCH_USER_DATA } from "../constants/action-types";
import { SAVE_ACCESS_TOKEN } from "../constants/action-types";

const initialState = {
  userData: {},
  serverData: {},
  accessToken: false
};

function userReducer(state = initialState, action) {
  if (action.type === SAVE_ACCESS_TOKEN) {
    return Object.assign({}, state, {
      accessToken: action.payload
    });
  }

  if (action.type === FETCH_USER_DATA) {
    return Object.assign({}, state, {
      userData: Object.assign({}, state.userData, action.payload)
    });
  }
  return state;
}

export default userReducer;
