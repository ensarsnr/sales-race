import React from "react";
import Lottie from "react-lottie-player";
import graph from "../assets/anims/graph.json";
function GraphSection() {
  return (
    <div className="bg-light rounded-3xl shadow row-span-2">
      <div className="h-full w-full">
        <Lottie loop animationData={graph} play className="2xl:w-full h-full" />
      </div>
    </div>
  );
}

export default GraphSection;
