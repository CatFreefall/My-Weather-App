import React from "react";

import "/src/styles/header-component-styles/ModeSwitch.css";

export function ModeSwitch() {
  return (
    <div id="slider-div">
      <label id="toggle">
        <input id="toggle-checkbox" type="checkbox" />
        <div id="toggle-switch"></div>
        <span id="toggle-label"></span>
      </label>
    </div>
  );
}
