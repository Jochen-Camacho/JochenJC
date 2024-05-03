import React, { useState, useEffect } from "react";
import "./Hero.css"; // Assuming this CSS is defined as per your provided CSS
import { Cube } from "../Cube/Cube";

export const Hero = () => {
  const codeDescList = ["Responsive", "Adaptable", "Accessible", "Clean"];
  const [index, setIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(Math.random());

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % codeDescList.length);

      setAnimationKey(Math.random());
    }, 5000);

    return () => clearInterval(interval);
  }, [codeDescList.length]);

  return (
    <div className="pageCont heroCont" id="home">
      <div className="pageInner heroInner">
        <p className="heroIntro">Hi, my name is</p>
        <p className="heroName titleFont">Jochen Camacho</p>
        <p className="heroMain titleFont">- Software Developer</p>
        <div className="heroDesc">
          I aim to make:
          <span className="changingContent typing-effect" key={animationKey}>
            {codeDescList[index]}
          </span>
          code.
        </div>
      </div>
      <div className="cubeCont">
        <Cube></Cube>
      </div>
    </div>
  );
};
