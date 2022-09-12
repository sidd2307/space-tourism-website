import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-tablet desktop:bg-desktop h-screen bg-no-repeat bg-cover">
      <NavBar />

      <div className="flex flex-col desktop:flex-row w-[80%] mx-auto h-[80%] mt-auto mb-auto justify-between">
        <div className="flex flex-col w-[90%] mobile:w-[70%] desktop:w-[30%] mx-auto desktop:mx-0 h-80 my-auto justify-between">
          <span className="font-Berlow text-base w-[100%] text-center desktop:text-2xl text-[#D0D6F9] font-thin tracking-widest">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className="font-Bellefair text-6xl mobile:text-9xl text-white mx-auto desktop:mx-0">
            SPACE
          </span>
          <span className="font-Berlow text-base text-[#D0D6F9] font-thin text-center desktop:text-justify">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="h-[150px] w-[150px] px-[25px] py-[60px] mobile:h-[274px] mobile:w-[274px] rounded-full bg-white mobile:px-[60px] mobile:py-[120px] mx-auto desktop:mx-0 my-auto">
          <span className="font-Bellefair text-xl mobile:text-3xl text-[#0B0D17] font-thin tracking-widest">
            EXPLORE
          </span>
        </div>
      </div>
    </div>
  );
}
