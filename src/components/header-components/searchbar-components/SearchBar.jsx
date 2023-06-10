import React, { useEffect } from "react";

import "/src/styles/header-component-styles/searchbar-component-styles/SearchBar.css";

import { SearchBarSuggestions } from "./SearchBarSuggestions";

export function SearchBar({ onSearch }) {
  const [search, setSearch] = React.useState("");
  const [suggestions, setSuggestions] = React.useState([]);

  // fetch suggestions from API
  const fetchSuggestions = async (currentInput) => {
    const options = {
      method: "GET",
    };

    const host = "http://api.weatherapi.com/v1/search.json?";
    const key = "c9ea430da233494d80d231236222412";
    const input = currentInput;
    const callURL = host + "key=" + key + "&q=" + input;

    try {
      const response = await fetch(callURL, options);
      const fetchedSuggestions = await response.json();
      setSuggestions(fetchedSuggestions);
    } catch (error) {
      console.log(error);
    }
  };

  // function to get the current input from the search bar
  const getCurrentInput = (e) => {
    const currUserInput = e.target.value;
    setSearch(currUserInput);

    // API does not fetch anything if input.length < 3.
    // this prevents unecessary API calls and empties suggestions when input < 3.
    currUserInput.length >= 3
      ? fetchSuggestions(currUserInput)
      : setSuggestions([]);
  };

  // function to submit the search input
  const submitInput = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  // when user clicks on a suggestion, the suggestion is filled into the search bar,
  // suggestions clear, the suggestion is submitted, and the searchbar is then cleared 
  const autofillClicked = (suggestion) => {
    const clickedCity =
      suggestion.name + " " + suggestion.region + " " + suggestion.country;

    setSearch(clickedCity);
    onSearch(clickedCity);
    setSuggestions([]);
    setSearch("");
  };

  return (
    <div id="search-bar-div">
      <form id="search-bar" onSubmit={submitInput}>
        <input
          id="input-box"
          type="text"
          placeholder="Search for a City..."
          name="search"
          value={search}
          onChange={getCurrentInput}
          action=""
          autoComplete="off"
        ></input>
        <button id="submit-city" type="submit">
          <img
            id="search-icon"
            src="/assets/icons/magnifying-glass-icon.png"
            alt="Search Icon"
          ></img>
        </button>
      </form>
      <div>
        <SearchBarSuggestions
          suggestions={suggestions}
          suggestionClicked={autofillClicked}
        />
      </div>
    </div>
  );
}
