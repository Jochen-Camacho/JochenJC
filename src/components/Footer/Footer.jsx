import React from "react";
import "./Footer.css";
import { CiCircleCheck } from "react-icons/ci";

export const Footer = () => {
  const trackRef = React.useRef();
  const [istrackVisible, setIsTrackVisible] = React.useState();

  React.useEffect(() => {
    if (istrackVisible) {
      trackRef.current.classList.add("inView");
    }
  }, [istrackVisible]);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsTrackVisible(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );
    observer.observe(trackRef.current);
  }, []);

  return (
    <div className="pageCont">
      <div className="pageInner footer scrollPage" ref={trackRef}>
        <p>
          Developed and Designed by: <br></br>Jochen Camacho<br></br>
          <CiCircleCheck className="checkIcon" />
        </p>
      </div>
    </div>
  );
};
