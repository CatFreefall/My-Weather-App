import React from "react";
import { HeaderTitle } from "./header-components/HeaderTitle";
import { SearchBar } from "./header-components/SearchBar";
import { ModeSwitch } from "./header-components/ModeSwitch";

import "/src/styles/Header.css";

export function Header({ onSearch }) {
  const searchCity = (searchValue) => {
    // Access the search value and perform necessary actions
    console.log("Search value:", searchValue);
  };

  return (
    <div id="header">
      <HeaderTitle />
      <SearchBar onSearch={onSearch}/>
      <ModeSwitch />
    </div>
  );
}
