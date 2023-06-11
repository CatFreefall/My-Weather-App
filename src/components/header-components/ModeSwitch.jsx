import React from "react";

import "/src/styles/header-component-styles/ModeSwitch.css";

export function ModeSwitch({ darkMode, toggleDarkMode }) {
  return (
    <div id="slider-div">
      <label id="toggle">
        <input
          id="toggle-checkbox"
          type="checkbox"
          checked={darkMode}
          onChange={toggleDarkMode}
        />
        <div id="toggle-switch"></div>
        <span id="toggle-label"></span>
      </label>
    </div>
  );
}
