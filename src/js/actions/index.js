import { FAKE_DATA } from "../constants/action-types";
import fakeData from "../fakedata";
export function getFakeData() {
  return function(dispatch) {
    return setTimeout(() => {
      dispatch({ type: FAKE_DATA, payload: fakeData.fakeData });
    }, 1000);
  };
}
