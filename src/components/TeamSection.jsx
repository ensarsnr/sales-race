import React from "react";

function TeamSection() {
  return (
    <div className="bg-light rounded-3xl shadow 2xl:row-span-2 2xl:col-start-1 xl:col-2 lg:col-span-1 2xl:row-start-5">
      <div className="h-full w-full">
        <div className="w-full text-center p-5">
          <span className="2xl:text-8xl xl:text-6xl lg:text-3xl font-bold text-dark">
            Takım-1
          </span>
        </div>
        <div className="w-3/4 shadow m-auto rounded-3xl h-4/6 bg-black">s</div>
      </div>
    </div>
  );
}

export default TeamSection;
