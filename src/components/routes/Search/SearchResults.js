import React from "react";
import { connect } from "react-redux";
import Song from "../../snippets/Song";

const SearchResults = ({ results }) => {
  console.log(results.tracks);
  if (results.tracks) {
    let items = results.tracks.items;
    return (
      <div>
        <h1>Search Results</h1>
        <ul>
          {items.map(item => (
            <Song
              key={item.id}
              name={item.name}
              artists={item.artists}
              uri={item.uri}
            />
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>No search found</div>;
  }
};

const mapStateToProps = state => {
  return {
    results: state.search.results,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(SearchResults);
