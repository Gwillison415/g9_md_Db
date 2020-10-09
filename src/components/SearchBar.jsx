import React, { useCallback } from "react";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";
import debounce from "lodash/debounce";
import { connect } from "react-redux";
import { compose } from "redux";
import { addSearchResults } from "../redux/actions/searchActions";

const SearchBar = ({
  classes,
  onAddSearchResults,
  pageNumber,
}) => {
  const debounceHandleSearch = React.useCallback(
    debounce(handleSearch, 500),
    []
  );

  function handleSearch(value) {
    if (value.length) {
      onAddSearchResults({ string: value, pageNumber });
      
    }
  }
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
    pageNumber: state.search.page,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddSearchResults: (payload) => {
      dispatch(addSearchResults(payload));
    },
  };
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(SearchBar);
