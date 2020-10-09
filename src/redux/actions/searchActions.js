import * as CONST from "../constants";
import axios from "axios";
import { axiosInstance } from "../../utils/api";

export function startSearchResults() {
  return { type: CONST.ADD_SEARCH_RESULTS_BEGIN };
}

export const addSearchResultsFail = (payload) => ({
  type: CONST.ADD_SEARCH_RESULTS_FAIL,
  payload,
});
export const augmentSearchResults = ({ string, pageNumber }) => {
  return (dispatch) => {
    dispatch({
      type: CONST.AUGMENT_SEARCH_RESULTS_BEGIN,
    });
    axiosInstance({
      method: "get",
      // url: "/search/movie?=" + "&query=" + string + "&page=1",

      url:
        "/search/movie?" +
        "&query=" +
        string +
        "&page=" +
        (Number(pageNumber) + 1),
    })
      .then((res) => {
        const { page, results, total_pages, total_results } = res.data;
        dispatch({
          type: CONST.AUGMENT_SEARCH_RESULTS_SUCCESS,
          payload: {
            page,
            results,
            total_pages,
            total_results,
            currentSearch: string,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: CONST.AUGMENT_SEARCH_RESULTS_FAIL,
          payload: "THINGS",
        });
        alert(error);
      });
  };
};

export const addSearchResults = ({ string, pageNumber }) => {
  return (dispatch) => {
    dispatch({
      type: CONST.ADD_SEARCH_RESULTS_BEGIN,
    });
    axiosInstance({
      method: "get",
      // url: "/search/movie?=" + "&query=" + string + "&page=1",

      url: "/search/movie?" + "&query=" + string + "&page=" + pageNumber + 1,
    })
      .then((res) => {
        const { page, results, total_pages, total_results } = res.data;
        dispatch({
          type: CONST.ADD_SEARCH_RESULTS_SUCCESS,
          payload: {
            page,
            results,
            total_pages,
            total_results,
            currentSearch: string,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: CONST.ADD_SEARCH_RESULTS_FAIL,
          payload: "error time",
        });
        alert(error);
      });
  };
};
