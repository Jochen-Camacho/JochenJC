import React from "react";
import "./Cube.css";

export const Cube = () => {
  return (
    <div class="scene">
      <div className="cubeWrapper">
        <div class="cube">
          <div class="face front"></div>
          <div class="face back"></div>
          <div class="face right"></div>
          <div class="face left"></div>
          <div class="face top"></div>
          <div class="face bottom"></div>
        </div>
      </div>
    </div>
  );
};
