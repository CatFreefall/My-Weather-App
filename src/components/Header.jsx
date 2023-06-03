import React from "react";
import { HeaderTitle } from "./header-components/HeaderTitle";
import { SearchBar } from "./header-components/SearchBar";
import { ModeSwitch } from "./header-components/ModeSwitch";

export function Header() {
  return (
    <div>
      <HeaderTitle />
      <SearchBar />
      <ModeSwitch />
    </div>
  )
}