import React, { useState } from "react";
import NavBar from "../components/NavBar";
import MoonImg from "../assets/destination/image-moon.png";
import MarsImg from "../assets/destination/image-mars.png";
import EuropaImg from "../assets/destination/image-europa.png";
import TitanImg from "../assets/destination/image-titan.png";

export default function Destination() {
  const [selecteddest, setselecteddest] = useState("moon");
  const data = {
    moon: {
      title: "Moon",
      desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      img: MoonImg,
      averageDist: "384,400 km",
      estimatedTime: "3 days",
    },
    mars: {
      title: "Mars",
      desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      img: MarsImg,
      averageDist: "225 MIL. km",
      estimatedTime: "9 months",
    },
    europa: {
      title: "Europa",
      desc: "The smallest of Jupiter’s four Galilean moons, Europa is also the most geologically active. It’s covered in a thick layer of ice, but beneath that lies a vast ocean of liquid water. It’s thought that this ocean may contain more water than all the oceans on Earth combined.",
      img: EuropaImg,
      averageDist: "628 MIL. km",
      estimatedTime: "3 years",
    },
    titan: {
      title: "Titan",
      desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      img: TitanImg,
      averageDist: "1.6 BIL. km",
      estimatedTime: "7 years",
    },
  };
  return (
    <div className="bg-tabletdest desktop:bg-desktopdest h-full min-h-[100vh] my-auto bg-no-repeat bg-cover">
      <NavBar />
      <div className="flex flex-col desktop:flex-row w-[80%] mx-auto h-[80%] mt-auto mb-auto justify-between">
        <div className="w-[80%] mobile:w-[70%] desktop:w-[40%] my-auto mx-auto desktop:mx-0 py-8 flex flex-col">
          <div className="mb-10 w-[100%] font-Berlow text-base text-center desktop:text-left desktop:text-3xl text-white font-thin tracking-widest">
            <span className="mr-3 text-gray-600 font-semibold">01</span>Pick
            your destination
          </div>
          <img src={data[selecteddest].img} alt="" />
        </div>

        <div className="flex flex-col w-[90%] mobile:w-[70%] desktop:w-[40%] mx-auto desktop:mx-0 h-96 my-auto justify-between">
          <span className="w-[90%] mobile:w-[80%] desktop:w-[80%] font-Berlow flex flex-row justify-between text-base text-center desktop:text-2xl text-[#D0D6F9] font-thin tracking-widest">
            <div
              onClick={() => setselecteddest("moon")}
              style={{
                borderColor:
                  selecteddest === "moon" ? "#D0D6F9" : "transparent",
                color: selecteddest === "moon" ? "#ffffff" : "#D0D6F9",
              }}
              className="cursor-pointer border-b-4 border-transparent hover:border-white"
            >
              Moon
            </div>
            <div
              onClick={() => setselecteddest("mars")}
              style={{
                borderColor:
                  selecteddest === "mars" ? "#D0D6F9" : "transparent",
                color: selecteddest === "mars" ? "#ffffff" : "#D0D6F9",
              }}
              className="cursor-pointer border-b-4 border-transparent hover:border-white"
            >
              Mars
            </div>
            <div
              onClick={() => setselecteddest("europa")}
              style={{
                borderColor:
                  selecteddest === "europa" ? "#D0D6F9" : "transparent",
                color: selecteddest === "europa" ? "#ffffff" : "#D0D6F9",
              }}
              className="cursor-pointer border-b-4 border-transparent hover:border-white"
            >
              Europa
            </div>
            <div
              onClick={() => setselecteddest("titan")}
              style={{
                borderColor:
                  selecteddest === "titan" ? "#D0D6F9" : "transparent",
                color: selecteddest === "titan" ? "#ffffff" : "#D0D6F9",
              }}
              className="cursor-pointer border-b-4 border-transparent hover:border-white"
            >
              Titan
            </div>
          </span>
          <span className="font-Bellefair text-6xl mobile:text-9xl text-white mx-auto desktop:mx-0">
            {data[selecteddest].title}
          </span>
          <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center desktop:text-justify border-b-2 border-[#979797] pb-4">
            {data[selecteddest].desc}
          </span>
          <div className="flex flex-row w-[100%] justify-between mt-5 pb-5">
            <div className="flex flex-col w-[50%] mobile:w-[40%]">
              <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center mobile:text-left">
                AVG. DISTANCE
              </span>
              <span className="font-Bellefair text-2xl text-white text-center mobile:text-left">
                {data[selecteddest].averageDist}
              </span>
            </div>
            <div className="flex flex-col w-[50%] mobile:w-[40%]">
              <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center mobile:text-left">
                ESTIMATED TIME
              </span>
              <span className="font-Bellefair text-2xl text-white text-center mobile:text-left">
                {data[selecteddest].estimatedTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
