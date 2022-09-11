import React from "react";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="bg-tablet desktop:bg-desktop h-screen bg-no-repeat bg-cover">
      <NavBar />
    </div>
  );
}
