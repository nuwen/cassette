import React from "react";
import { connect } from "react-redux";

const SearchResults = () => {
  return (
    <div>
      <h1>Search Results</h1>
      <ul>Search Results List</ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    searchData: state.searchData,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(SearchResults);
