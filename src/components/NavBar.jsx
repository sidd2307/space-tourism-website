import React, { useState } from "react";
import logo from "../assets/shared/logo.svg";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuClosed, setMenuClosed] = useState(true);
  const links = ["00 HOME", "01 DESTINATION", "02 CREW", "03 TECHNOLOGY"];
  const links2 = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
  // console.log(window.innerWidth);
  const wid = window.innerWidth;

  return (
    <div className="text-white flex font-Rubik">
      <nav className="w-[100%] sm:w-[90%] ml-auto mr-auto mt-8 backdrop-blur-xl pl-8">
        <div className="text-lg bold">
          <img src={logo} alt="" />
        </div>
        <div
          className="nav-hamburguer-icon"
          onClick={() => setMenuClosed(!isMenuClosed)}
        >
          ☰
        </div>
        {wid > 980 && console.log("first")}
        {wid > 980 ? (
          <div className="nav-links">
            {links.map((node) => {
              return (
                <a
                  key={node}
                  href="/"
                  className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
                >
                  {node}
                </a>
              );
            })}
          </div>
        ) : (
          <div className="nav-links">
            {links2.map((node) => {
              return (
                <a
                  key={node}
                  href="/"
                  className="text-white font-Berlow text-xl font-thin py-2 px-4 hover:border-b-[4px] hover:border-white"
                >
                  {node}
                </a>
              );
            })}
          </div>
        )}
      </nav>
      <div
        className={`overlay-container${isMenuClosed ? "-hidden" : "-show"} `}
      >
        <div style={{ backdropFilter: 1 }}>
          <div
            className="overlay-buttonClose"
            onClick={() => setMenuClosed(!isMenuClosed)}
          >
            <span>&times;</span>
          </div>

          <div className="overlay-menu-wrapper">
            <div className="overlay-menu">
              {links.map((node) => {
                return (
                  <a
                    key={node}
                    onClick={() => setMenuClosed(!isMenuClosed)}
                    className="overlay-menu-item"
                    style={{ color: "white", width: 150, fontSize: 20 }}
                  >
                    <span className="font-Berlow">{node}</span>
                  </a>
                );
              })}

              <div>
                {/* <a href="/" className="text-white text-base py-2 px-4">
                  Login
                </a>
                <span className="text-[#525267] text-2xl ml-4 mr-4">|</span>
                <a
                  href="/"
                  class="bg-blue-500 text-white py-2 px-4 rounded-full mb-0 mt-0"
                >
                  Register
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
