import React from "react";
import "./Nav.css";
import { LuHexagon } from "react-icons/lu";
import { TbLetterJSmall } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

export const Nav = () => {
  const navItems = [
    {
      item: "Home",
      link: "#home",
    },
    {
      item: "About",
      link: "#about",
    },
    {
      item: "Projects",
      link: "#projects",
    },
    {
      item: "Contact",
      link: "#contact",
    },
  ];

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  return (
    <>
      <div id="myNav" className="overlay">
        <a className="closebtn" onClick={closeNav}>
          &times;
        </a>
        <div className="overlay-content">
          <a href="#home" onClick={closeNav}>
            Home
          </a>
          <a href="#about" onClick={closeNav}>
            About
          </a>
          <a href="#projects" onClick={closeNav}>
            Projects
          </a>
          <a href="#contact" onClick={closeNav}>
            Contact
          </a>
        </div>
      </div>
      <nav className="navBar f-spbwt">
        <a href="#home">
          <div className="logo ">
            <LuHexagon className="navLogoBox" />
            <TbLetterJSmall className="navLogoLetter" />
          </div>
        </a>
        <div className="hambMenu" onClick={openNav}>
          <RxHamburgerMenu />
        </div>
        <ul className="navBarInner f-Vcenter">
          {navItems.map((item) => {
            return (
              <li className="navBarItem">
                <a href={item.link}>{item.item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};
