import React from "react";

import "/src/styles/header-component-styles/ModeSwitch.css";

export function ModeSwitch() {
  return (
    <label id="switch">
      <input type="checkbox" />
      <span id="slider"></span>
    </label>
  );
}
