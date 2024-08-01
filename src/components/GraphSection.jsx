import React from "react";
import Lottie from "react-lottie-player";
import graph from "../assets/anims/lazycat.json";
function GraphSection() {
  return (
    <div className="bg-light rounded-3xl shadow row-span-2 p-5">
      <div className="h-full w-full">
        <h1 style={{fontFamily:"TitleFont"}} className="text-center text-9xl">Ayın Tembeli</h1>
        <Lottie loop animationData={graph} play className="2xl:w-full h-full" />
      </div>
    </div>
  );
}

export default GraphSection;
