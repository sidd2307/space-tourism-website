import React, { useState } from "react";
import NavBar from "../components/NavBar";
import LaunchImg from "../assets/technology/image-launch-vehicle-landscape.jpg";
import LaunchPotraitImg from "../assets/technology/image-launch-vehicle-portrait.jpg";
import CapsuleImg from "../assets/technology/image-space-capsule-landscape.jpg";
import CapsulePotraitImg from "../assets/technology/image-space-capsule-portrait.jpg";
import PortImg from "../assets/technology/image-spaceport-landscape.jpg";
import PortPotraitImg from "../assets/technology/image-spaceport-portrait.jpg";

export default function Technology() {
  const [selecteddest, setselecteddest] = useState("launch");
  const data = {
    launch: {
      title: "LAUNCH VEHICLE",
      desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
      img: LaunchImg,
      potrait: LaunchPotraitImg,
    },
    port: {
      title: "SPACEPORT",
      desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
      img: PortImg,
      potrait: PortPotraitImg,
    },
    capsule: {
      title: "SPACE CAPSULE",
      desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
      img: CapsuleImg,
      potrait: CapsulePotraitImg,
    },
  };
  return (
    <div className="bg-tablettechnology desktop:bg-desktoptechnology h-full min-h-[100vh] my-auto bg-no-repeat bg-cover">
      <NavBar />
      <div className="flex flex-col-reverse desktop:flex-row w-[100%] mx-auto h-[80%] mt-auto mb-auto justify-between">
        <div className="flex flex-col w-[90%] mobile:w-[70%] desktop:w-[40%] mx-auto desktop:ml-40 desktop:mx-0 h-96 my-auto justify-between">
          {/* section name */}
          <div className="w-[80%] mobile:w-[70%] desktop:w-[100%] hidden my-auto mx-auto desktop:mx-0 desktop:my-0 desktop:flex flex-col">
            <div className="mb-10 w-[100%] font-Berlow text-base text-center desktop:text-left desktop:text-3xl text-white font-thin tracking-widest">
              <span className="mr-3 text-gray-600 font-semibold">03</span>
              SPACE LAUNCH 101
            </div>
          </div>
          <span className="w-[100%] mobile:w-[100%] desktop:w-[100%] h-[100%] flex flex-col desktop:flex-row justify-between mx-auto">
            <div className="flex flex-row desktop:flex-col justify-between">
              <div
                onClick={() => setselecteddest("launch")}
                className="cursor-pointer"
              >
                <span
                  className="h-[60px] w-[60px] rounded-full px-5 py-3 text-lg"
                  style={{
                    borderColor:
                      selecteddest === "launch" ? "#ffffff" : "#979797",
                    display: "inline-block",
                    borderWidth: 4,
                    color: selecteddest === "launch" ? "black" : "#ffffff",
                    backgroundColor:
                      selecteddest === "launch" ? "#ffffff" : "transparent",
                  }}
                >
                  1
                </span>
              </div>
              <div
                onClick={() => setselecteddest("port")}
                className="cursor-pointer"
              >
                <span
                  className="h-[60px] w-[60px] rounded-full px-5 py-3 text-lg"
                  style={{
                    borderColor:
                      selecteddest === "port" ? "#ffffff" : "#979797",
                    display: "inline-block",
                    borderWidth: 4,
                    color: selecteddest === "port" ? "black" : "#ffffff",
                    backgroundColor:
                      selecteddest === "port" ? "#ffffff" : "transparent",
                  }}
                >
                  2
                </span>
              </div>
              <div
                onClick={() => setselecteddest("capsule")}
                className="cursor-pointer"
              >
                <span
                  className="h-[60px] w-[60px] rounded-full px-5 py-3 text-lg"
                  style={{
                    borderColor:
                      selecteddest === "capsule" ? "#ffffff" : "#979797",
                    display: "inline-block",
                    borderWidth: 4,
                    color: selecteddest === "capsule" ? "black" : "#ffffff",
                    backgroundColor:
                      selecteddest === "capsule" ? "#ffffff" : "transparent",
                  }}
                >
                  3
                </span>
              </div>
            </div>
            <div>
              <div className="h-[100%] desktop:h-[100%] desktop:w-[70%] mx-auto flex flex-col justify-evenly desktop:justify-between text-center">
                <span className="w-[90%] mobile:w-[90%] desktop:w-[100%] font-Bellefair mx-auto desktop:mx-0 text-lg text-center desktop:text-left desktop:text-2xl text-[#D0D6F9] font-thin tracking-widest">
                  THE TERMINOLOGY…
                </span>
                <span className="font-Bellefair text-4xl mobile:text-4xl text-white mx-auto desktop:mx-0 text-center desktop:text-left">
                  {data[selecteddest].title}
                </span>
                <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center desktop:text-justify">
                  {data[selecteddest].desc}
                </span>
              </div>
            </div>
          </span>
        </div>
        <div className="hidden desktop:w-[40%] my-auto mx-auto desktop:mx-0 desktop:flex flex-col h-[400px] mobile:h-[600px]">
          <img className="h-[90%]" src={data[selecteddest].potrait} alt="" />
        </div>
        <div className="w-[100%] mobile:w-[100%] desktop:hidden my-auto desktop:mx-0 flex flex-col">
          <div className="w-[80%] mobile:w-[70%] desktop:w-[100%] my-auto mx-auto desktop:mx-0 desktop:my-0 flex flex-col">
            <div className="mb-10 w-[100%] font-Berlow text-base text-center desktop:text-left desktop:text-3xl text-white font-thin tracking-widest">
              <span className="mr-3 text-gray-600 font-semibold">03</span>
              SPACE LAUNCH 101
            </div>
          </div>
          <img
            className="h-[100%] w-[100%] mb-10"
            src={data[selecteddest].img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
