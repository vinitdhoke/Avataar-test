import React, { useState, useEffect } from "react";
import "./styles.scss";
import logo from "../images/logo.png";

const Header = () => {
  const menus = [
    "HOME",
    "ELECTRONICS",
    "BOOKS",
    "MUSIC",
    "MOVIE",
    "CLOTHING",
    "GAMES",
    "FURNITURE",
    "BOATANICAL",
    "TRAVEL",
    "CATEGORY"
  ];
  const [visibleMenuItems, setVisibleMenuItems] = useState([]);
  const [moreMenuItems, setMoreMenuItems] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", windowResized);
    return () => {
      window.removeEventListener("resize", windowResized);
    };
  }, []);
  const handleResize = () => {
    const noOfMenu = Math.floor((window.innerWidth - 500) / 100);
    setVisibleMenuItems(menus.slice(0, noOfMenu));
    setMoreMenuItems(menus.slice(noOfMenu, menus.length));
    console.log(noOfMenu);
  };
  let timer;
  const windowResized = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      handleResize();
    }, 500);
  };

  return (
    <>
      <header>
        <img src={logo} alt="logo" />
        <div>
          <nav>
            <ul className="menu">
              {visibleMenuItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
              {moreMenuItems.length > 0 && (
                <li className="more" onClick={() => setShowMore(!showMore)}>
                  <span>MORE &#8595;</span>
                  <ul className="more-menu">
                    {showMore &&
                      moreMenuItems.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                  </ul>
                </li>
              )}
            </ul>
          </nav>
        </div>
        <div class="search-container">
          <span>🔍</span>
          <input type="text" id="search-input" placeholder="Search something" />
        </div>
      </header>
    </>
  );
};

export default Header;
