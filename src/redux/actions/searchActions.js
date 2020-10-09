import * as CONST from "../constants";
import axios from "axios";
import { axiosInstance } from "../../utils/api";

// export const addSearchResults = (data) => {
//   const { page, results } = data;
//   return (dispatch) => {
//     dispatch({
//       type: CONST.ADD_SEARCH_RESULTS_SUCCESS,
//       payload: { page, results },
//     });
//   };
// };

export function startSearchResults() {
  return { type: CONST.ADD_SEARCH_RESULTS_BEGIN };
}

export const addSearchResultsFail = (payload) => ({
  type: CONST.ADD_SEARCH_RESULTS_FAIL,
  payload,
});
export const addSearchResultsLatest = (payload) => ({
  type: CONST.ADD_SEARCH_RESULTS_SUCCESS,
  payload,
});

export const addSearchResults = (string) => {
  return (dispatch) => {
    dispatch({
      type: CONST.ADD_SEARCH_RESULTS_BEGIN,
    });
    axiosInstance({
      method: "get",
      // url: "/search/movie?=" + "&query=" + string + "&page=1",

      url: "/search/movie?" + "&query=" + string + "&page=1",
    })
      .then((res) => {
        console.log("res.data", res.data);
        const { page, results } = res.data;
        dispatch({
          type: CONST.ADD_SEARCH_RESULTS_SUCCESS,
          payload: { page, results },
        });
      })
      .catch((error) => {
        dispatch({
          type: CONST.ADD_SEARCH_RESULTS_FAIL,
          payload: "THINGS",
        });
        alert(error);
      });
  };
};
