import { SAVE_RESULTS } from "../constants/action-types";

const initialState = {
  results: {}
};

function searchReducer(state = initialState, action) {
  if (action.type === SAVE_RESULTS) {
    console.log(action.payload);
  }

  return state;
}

export default searchReducer;
