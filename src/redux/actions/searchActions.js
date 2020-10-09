import * as CONST from "../constants";
import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";

export const addSearchResults = (data) => {
  const { page, results } = data;
  return (dispatch) => {
    dispatch({
      type: CONST.ADD_SEARCH_RESULTS_SUCCESS,
      payload: { page, results },
    });
  };
};
export function getLatestSearchResults(string) {
  return { type: CONST.ADD_SEARCH_RESULTS_SAGA_LATEST, string };
}
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
    axios({
      method: "get",
      url:
        BASE_URL +
        "/search/movie?api_key=" +
        process.env.REACT_APP_TMDB_API_KEY_V3 +
        "&language=en-US&query=" +
        string +
        "&page=1" +
        "&include_adult=false",
    })
      .then((res) => {
        // console.log("res.data", res.data);
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
