import * as CONST from "../constants";

const initialState = {
  infoMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONST.ADD_SEARCH_RESULTS_BEGIN:
      // const {refreshToken, otherPayload} = objectToDestruct
      return {
        ...state,
        infoMessage: "STARTED searching",
      };
    case CONST.ADD_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        infoMessage: "results obtained",
      };
    case CONST.ADD_SEARCH_RESULTS_FAIL:
      return {
        ...state,
        infoMessage: "results failed",
      };
    default:
      return state;
  }
};
