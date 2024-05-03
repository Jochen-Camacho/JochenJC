import React from "react";
import { LuHexagon } from "react-icons/lu";
import { TbLetterJSmall } from "react-icons/tb";
import "./LogoLoad.css";

export const LogoLoad = React.forwardRef((props, ref) => {
  return (
    <div className="logo-main f-center" ref={ref}>
      <div className="logo-cont f-center">
        <LuHexagon className="icon-border" />
        <TbLetterJSmall className="icon-letter" />
      </div>
    </div>
  );
});
