import React, { useState } from "react";
import NavBar from "../components/NavBar";
import AnoushehImg from "../assets/crew/image-anousheh-ansari.png";
import DouglasImg from "../assets/crew/image-douglas-hurley.png";
import MarkImg from "../assets/crew/image-mark-shuttleworth.png";
import VictorImg from "../assets/crew/image-victor-glover.png";

export default function Crew() {
  const [selecteddest, setselecteddest] = useState("anousheh");
  const data = {
    anousheh: {
      title: "ANOUSHEH ANSARI",
      desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
      img: AnoushehImg,
      role: "FLIGHT ENGINEER",
    },
    douglas: {
      title: "DOUGLAS HURLEY",
      desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      img: DouglasImg,
      role: "COMMANDER",
    },
    mark: {
      title: "MARK SHUTTLEWORTH",
      desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      img: MarkImg,
      role: "FLIGHT ENGINEER",
    },
    victor: {
      title: "VICTOR GLOVER",
      desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
      img: VictorImg,
      role: "PILOT",
    },
  };
  return (
    <div className="bg-tabletcrew desktop:bg-desktopcrew h-full min-h-[100vh] my-auto bg-no-repeat bg-cover">
      <NavBar />
      <div className="flex flex-col-reverse desktop:flex-row w-[80%] mx-auto h-[80%] mt-auto mb-auto justify-between">
        <div className="flex flex-col w-[90%] mobile:w-[70%] desktop:w-[40%] mx-auto desktop:mx-0 h-96 my-auto justify-between">
          <span className="w-[50%] mobile:w-[50%] desktop:w-[30%] flex desktop:hidden flex-row justify-between mx-auto">
            <div
              onClick={() => setselecteddest("anousheh")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "anousheh" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("douglas")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "douglas" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("mark")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "mark" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("victor")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "victor" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
          </span>
          <div className="h-[100%] desktop:h-[60%] flex flex-col justify-evenly desktop:justify-between text-center">
            <span className="w-[90%] mobile:w-[80%] desktop:w-[80%] font-Bellefair mx-auto desktop:mx-0 text-2xl text-center desktop:text-left desktop:text-3xl text-gray-500 font-thin tracking-widest">
              {data[selecteddest].role}
            </span>
            <span className="font-Bellefair text-4xl mobile:text-5xl text-white mx-auto desktop:mx-0 text-center desktop:text-left">
              {data[selecteddest].title}
            </span>
            <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center desktop:text-justify">
              {data[selecteddest].desc}
            </span>
          </div>
          <span className="w-[50%] mobile:w-[50%] desktop:w-[30%] hidden desktop:flex flex-row justify-between">
            <div
              onClick={() => setselecteddest("anousheh")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "anousheh" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("douglas")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "douglas" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("mark")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "mark" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
            <div
              onClick={() => setselecteddest("victor")}
              className="cursor-pointer"
            >
              <span
                className="h-[15px] w-[15px] rounded-full"
                style={{
                  backgroundColor:
                    selecteddest === "victor" ? "#ffffff" : "#979797",
                  display: "inline-block",
                }}
              ></span>
            </div>
          </span>
        </div>
        <div className="w-[80%] mobile:w-[70%] desktop:w-[40%] my-auto mx-auto desktop:mx-0 flex flex-col h-[400px] mobile:h-[600px]">
          <img className="h-[90%]" src={data[selecteddest].img} alt="" />
        </div>
      </div>
    </div>
  );
}
