import React from "react";

import "/src/styles/header-component-styles/SearchBar.css";

export function SearchBar({ onSearch }) {
  const [search, setSearch] = React.useState("");

  const changeInput = (e) => {
    setSearch(e.target.value);
  };

  const submitInput = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  return (
    <div>
      <form id="search-bar" onSubmit={submitInput}>
        <input
          id="input-box"
          type="text"
          placeholder="Search for a City..."
          name="search"
          value={search}
          onChange={changeInput}
          action=""
        ></input>
        <button id="submit-city" type="submit">
          <img
            id="search-icon"
            src="/assets/icons/magnifying-glass-icon.png"
            alt="Search Icon"
          ></img>
        </button>
      </form>
    </div>
  );
}
