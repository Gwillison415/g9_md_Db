import * as CONST from "../constants";

const initialState = {
  infoMessage: "",
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
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
      const { page, results, total_pages, total_results } = action.payload;
      console.log("results", results);
      return {
        ...state,
        infoMessage: "results obtained",
        page,
        results,
        total_pages,
        total_results,
        // results: [...state.results.concat(results)],
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
