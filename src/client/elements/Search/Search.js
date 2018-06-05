import React from "react";

const Search = ({
  isLoading,
  handleResultSelect,
  onSearchChange,
  results,
  value
}) => (
  <Search
    loading={isLoading}
    onResultSelect={handleResultSelect}
    onSearchChange={onSearchChange}
    results={results}
    value={value}
  />
);

export default Search;
