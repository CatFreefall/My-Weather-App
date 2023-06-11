import React from "react";
import { HeaderTitle } from "./header-components/HeaderTitle";
import { SearchBar } from "./header-components/searchbar-components/SearchBar";
import { ModeSwitch } from "./header-components/ModeSwitch";

import "/src/styles/Header.css";

export function Header({ onSearch, darkMode, toggleDarkMode }) {

  return (
    <div id="header">
      <HeaderTitle darkMode={darkMode}/>
      <SearchBar onSearch={onSearch} />
      <ModeSwitch darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
    </div>
  );
}
