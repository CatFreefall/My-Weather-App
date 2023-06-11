import React, { useEffect } from "react";

import "/src/styles/header-component-styles/HeaderTitle.css";

export function HeaderTitle({ darkMode }) {

  return (
    <div id="header-title" className={darkMode ? "dark-mode-header" : null}>
      <img src="/assets/icons/website-icon.png" alt="Website Logo"></img>
      <h1>My Weather App</h1>
      <h6>Made by Kevin Feng</h6>
    </div>
  );
}
