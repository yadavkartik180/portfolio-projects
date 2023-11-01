import React from "react";
import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import "./Header.css";
const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false);
  const getMenuStyles = (menuopened) => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuopened && "-100%",
      };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="h-container innerWidth flexCenter paddings">
        <img src="./logo.png" alt="logo" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            setmenuOpened(false);
          }}
        >
          <div
            className="  flexCenter h-menu "
            style={getMenuStyles(menuOpened)}
          >
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setmenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
