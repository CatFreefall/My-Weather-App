import React from "react";

import "/src/styles/header-component-styles/searchbar-component-styles/SearchBarSuggestions.css";

export const SearchBarSuggestions = ({ suggestions, suggestionClicked }) => {
  return (
    <div id="suggestions-list">
      {suggestions.map((suggestion, index) => (
        <div key={index}>
          <div id="suggestion-divider"></div>
          <div id="single-suggestion" onClick={() => suggestionClicked(suggestion)}>
            {suggestion.name} | {suggestion.region} | {suggestion.country}
          </div>
        </div>
      ))}
    </div>
  );
};
