import React from "react";

import "/src/styles/header-component-styles/SearchBar.css";

export function SearchBar() {
  return (
    <div>
      <form id="search-bar" action="">
        <input id="input-box" type="text" placeholder=" Search for a location..." name="search"></input>
        <button id="submit-city" type="submit">
          <img id="search-icon"src="/assets/icons/magnifying-glass-icon.png" alt="Search Icon"></img>
        </button>
      </form>
    </div>
  );
}
