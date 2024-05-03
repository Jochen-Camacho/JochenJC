import React from "react";
import "./App.css";
import { Nav } from "./components/Nav/Nav";
import { LogoLoad } from "./components/LogoLoad/LogoLoad";
import { BrowserRouter } from "react-router-dom";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [isAnimationDone, setIsAnimationDone] = React.useState(false);
  const logoMainRef = React.useRef();

  React.useEffect(() => {
    const logoMain = logoMainRef.current;
    if (logoMain) {
      const handleAnimationDone = () => {
        setTimeout(() => {
          setIsAnimationDone(true);
        }, 1000);
      };

      logoMain.addEventListener("animationend", handleAnimationDone);

      return () =>
        logoMain.removeEventListener("animationend", handleAnimationDone);
    }
  }, []);
  return (
    <BrowserRouter>
      {isAnimationDone ? (
        <>
          <Nav />
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      ) : (
        <LogoLoad ref={logoMainRef} />
      )}
    </BrowserRouter>
  );
}

export default App;
