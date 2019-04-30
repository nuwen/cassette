import { FAKE_DATA } from "../constants/action-types";

const initialState = {
  user: null,
  serverData: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === FAKE_DATA) {
    return Object.assign({}, state, {
      serverData: Object.assign({}, state.serverData, action.payload)
    });
  }
  return state;
}

export default rootReducer;
