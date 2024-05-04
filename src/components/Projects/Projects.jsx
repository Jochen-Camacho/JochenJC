import React from "react";
import "./Projects.css";
import * as projectImgs from "../../assets/images/projectImgs";
import * as scImgs from "../../assets/images/screenshots";
import {
  FaArrowCircleRight,
  FaArrowCircleLeft,
  FaGithub,
} from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export const Projects = () => {
  const trackRef = React.useRef();
  const [istrackVisible, setIsTrackVisible] = React.useState();
  const [isVisible, setIsVisible] = React.useState(false);

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
      { threshold: 0.15 }
    );
    observer.observe(trackRef.current);
  }, []);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      image: projectImgs.project1,
      title: "Beats",
      desc: `A website that displays beats by different artists and allows
    users to interact, browse, purchase, and review with beats.
    Includes: audio functionality
    , global state management and
    responsive layouts.`,
      screenshots: [scImgs.sc4, scImgs.sc5, scImgs.sc6, scImgs.sc7, scImgs.sc8],
      websiteLink: "https://jochen-camacho.github.io/beats/",
      githubLink: "https://github.com/Jochen-Camacho/beats",
    },
    {
      image: projectImgs.project2,
      title: "AVGOTDRIP",
      desc: `A personal website for a music artist client with links to their
      various social platforms. Includes:
      background video player,
       unique components and
       responsive layouts.`,
      screenshots: [scImgs.sc1, scImgs.sc2, scImgs.sc3],
      websiteLink: "https://jochen-camacho.github.io/avgotdrip/",
      githubLink: "https://github.com/Jochen-Camacho/avgotdrip",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0); // Start from the second project

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % projects.length);
  };

  const currentProject = projects[currentIndex];

  function closeSC() {
    document.getElementById("sc").style.width = "0%";
    setIsVisible(false);
  }

  const scRef = React.useRef();

  const openSC = (e) => {
    const overlay = document.getElementById("sc");
    setIsVisible(true);
    overlay.style.width = "100%";
    scRef.current.src = e.target.src;
  };
  return (
    <div className="pageCont" id="projects">
      <div id="sc" className="overlay">
        <a className="closebtn" onClick={closeSC}>
          &times;
        </a>
        <div
          className={`overlay-content scDisplay ${isVisible ? "visible" : ""}`}
          key="1"
        >
          <img className="selectSC" ref={scRef}></img>
          <div className="scDisplayCont">
            {currentProject.screenshots.map((sc) => (
              <img
                className="screenshot"
                src={sc}
                alt={`Screenshot of ${currentProject.title}`}
                onClick={openSC}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="pageInner scrollPage" ref={trackRef}>
        <div className="pageHeader scrollPage">
          <h1 className="titleFont pageTitle">Projects</h1>
        </div>
        <div className="projectsCont scrollPage">
          <span className="left-arrow" onClick={prevSlide}>
            <FaArrowCircleLeft />
          </span>
          <div className="projects">
            <div className="project" key={currentIndex}>
              <h2 className="projectTitle">
                {currentProject.title}{" "}
                <Link to={currentProject.websiteLink} target="_blank">
                  <RiShareBoxLine className="proIcon" />
                </Link>
                <Link to={currentProject.githubLink} target="_blank">
                  <FaGithub className="proIcon" />
                </Link>
              </h2>
              <div className="project-lower">
                <div className="projectContent">
                  <p className="projectDesc">{currentProject.desc}</p>
                  <h2 className="screenShotsHead">Screenshots</h2>
                  <div className="screenShotsCont">
                    {currentProject.screenshots.map((sc) => (
                      <img
                        className="screenshot"
                        src={sc}
                        alt={`Screenshot of ${currentProject.title}`}
                        onClick={openSC}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <Link to={currentProject.websiteLink} target="_blank">
                <img
                  className="projectImg"
                  src={currentProject.image}
                  alt={`Project #${currentIndex + 1}`}
                />
              </Link>
            </div>
          </div>
          <span className="right-arrow" onClick={nextSlide}>
            <FaArrowCircleRight />
          </span>
        </div>
      </div>
    </div>
  );
};
