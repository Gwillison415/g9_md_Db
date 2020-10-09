import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {InputBase} from "@material-ui/core";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { compose } from "redux";
import {
  addSearchResults
} from "../redux/actions/searchActions";
// import {
//   getLatestSearchResults,

// } from "../redux/sagaHelpers";
const Search = ({
  classes,
  onAddSearchResults,
  onGetLatestSearchResults,
  pageNumber,
}) => {
  const debounceHandleSearch = React.useCallback(
    debounce(handleSearch, 1000),
    []
  );

  function handleSearch(value) {
    // const {
    //   target: { value },
    // } = event;
    // console.log("handleSearch value", value);
    onAddSearchResults({string:value, pageNumber});
  }
  //   handleSearch = debounce(handleSearch, 1500);
  return (
    <InputBase
      placeholder="Search…"
      classes={{
        root: classes.inputRoot,
        input: classes.inputInput,
      }}
      inputProps={{ "aria-label": "search" }}
      onChange={(e) => debounceHandleSearch(e.target.value)}
    />
  );
};

const mapStateToProps = (state) => {
  return {
pageNumber:state.search.page
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSearchResults: (payload) => {
      dispatch(addSearchResults(payload));
    },

  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(Search);

// export default Search
