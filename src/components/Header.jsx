import React from "react";
import { HeaderTitle } from "./header-components/HeaderTitle";
import { SearchBar } from "./header-components/SearchBar";
import { ModeSwitch } from "./header-components/ModeSwitch";

import "/src/styles/Header.css";

export function Header() {
  return (
    <div id="header">
      <HeaderTitle />
      <SearchBar />
      <ModeSwitch />
    </div>
  )
}