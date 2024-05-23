import React from "react";
import "./About.css";
import photo from "../../assets/images/Photo.jpg";

export const About = () => {
  const languages = (
    <ul className="skillContent" key="d">
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
      </li>
    </ul>
  );

  const frameworks = (
    <ul className="skillContent" key="r">
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dotnetcore/dotnetcore-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg" />
      </li>
    </ul>
  );

  const tools = (
    <ul className="skillContent">
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/intellij/intellij-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualstudio/visualstudio-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" />
      </li>
      <li class="skill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eclipse/eclipse-original-wordmark.svg" />
      </li>
    </ul>
  );

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
      { threshold: 0.15 }
    );
    observer.observe(trackRef.current);
  }, []);

  const [displaySkills, setDiisplaySkills] = React.useState(languages);

  React.useEffect(() => {
    const initialSkillType = document.getElementById("langSkills");
    initialSkillType.classList.add("active");
  }, []);

  const handleSkillTypeClick = (event, skills) => {
    setDiisplaySkills(skills);
    const previtems = document.querySelectorAll(".skillType");
    for (let item of previtems) {
      item.classList.remove("active");
    }
    event.target.classList.add("active");
  };
  return (
    <div className={`pageCont `} id="about">
      <div className="pageInner  scrollPage" ref={trackRef}>
        <div className="pageHeader  scrollPage">
          <h1 className="titleFont pageTitle">Hey There</h1>
        </div>
        <div className="aboutHead  scrollPage">
          <img src={photo} className="aboutPhoto" />
          <p className="aboutDesc">
            I, Jochen Camacho, am an aspiring software developer based in
            Ontario, Canada.
            <br></br>
            <br></br>
            My interest in how things work led me to learn coding skills to
            further investigate the world of technology and subsequently
            challenge the Computer Programming Program at Sheridan College
            Institute of Technology and Advanced Learning.<br></br>
            <br></br> I love learning new technology and implementing it to
            quench my thirst for innovation.
          </p>
        </div>
        <div className="aboutSkills  scrollPage">
          <h1 className="skillsTitle">Skills</h1>
          <div className="skillSec">
            <div className="skillHead">
              <h2
                id="langSkills"
                className="skillType"
                onClick={(event) => handleSkillTypeClick(event, languages)}
              >
                Languages
              </h2>
              <h2
                className="skillType"
                onClick={(event) => handleSkillTypeClick(event, frameworks)}
              >
                Frameworks & Libraries
              </h2>
              <h2
                className="skillType"
                onClick={(event) => handleSkillTypeClick(event, tools)}
              >
                Tools
              </h2>
            </div>
            <div>{displaySkills}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
