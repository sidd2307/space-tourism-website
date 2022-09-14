import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";
import "./NavBar.css";

export default function NavBar() {
  const [isMenuClosed, setMenuClosed] = useState(true);
  const links = ["00 HOME", "01 DESTINATION", "02 CREW", "03 TECHNOLOGY"];
  const links2 = ["HOME", "DESTINATION", "CREW", "TECHNOLOGY"];
  const wid = window.innerWidth;

  return (
    <div className="text-white flex font-Rubik">
      <nav className="w-[100%] sm:w-[90%] ml-auto mr-auto mt-8 backdrop-blur-xl pl-8">
        <Link to="/" className="text-lg bold">
          <img src={logo} alt="" />
        </Link>
        <div
          className="nav-hamburguer-icon"
          onClick={() => setMenuClosed(!isMenuClosed)}
        >
          ☰
        </div>
        {wid > 980 && console.log("first")}
        {wid > 980 ? (
          <div className="nav-links">
            <Link
              to="/"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              00 HOME
            </Link>
            <Link
              to="/destination"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              01 DESTINATION
            </Link>
            <Link
              to="/crew"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              02 CREW
            </Link>
            <Link
              to="/technology"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              03 TECHNOLOGY
            </Link>
          </div>
        ) : (
          <div className="nav-links">
            <Link
              to="/"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              HOME
            </Link>
            <Link
              to="/destination"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              DESTINATION
            </Link>
            <Link
              to="/crew"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              CREW
            </Link>
            <Link
              to="/technology"
              className="text-white font-Berlow text-xl font-thin py-2 px-4 border-b-[4px] border-transparent hover:border-white"
            >
              TECHNOLOGY
            </Link>
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
              <Link
                to="/"
                onClick={() => setMenuClosed(!isMenuClosed)}
                className="overlay-menu-item"
                style={{ color: "white", width: 150, fontSize: 20 }}
              >
                <span className="font-Berlow">00 HOME</span>
              </Link>
              <Link
                to="/destination"
                onClick={() => setMenuClosed(!isMenuClosed)}
                className="overlay-menu-item"
                style={{ color: "white", width: 150, fontSize: 20 }}
              >
                <span className="font-Berlow">01 DESTINATION</span>
              </Link>
              <Link
                to="/crew"
                onClick={() => setMenuClosed(!isMenuClosed)}
                className="overlay-menu-item"
                style={{ color: "white", width: 150, fontSize: 20 }}
              >
                <span className="font-Berlow">02 CREW</span>
              </Link>
              <Link
                to="/technology"
                onClick={() => setMenuClosed(!isMenuClosed)}
                className="overlay-menu-item"
                style={{ color: "white", width: 150, fontSize: 20 }}
              >
                <span className="font-Berlow">03 TECHNOLOGY</span>
              </Link>

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
