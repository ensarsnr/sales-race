import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";
import backgroundImg from "./assets/image/Zemin.png";
import Lottie from "react-lottie-player";
import make from "./assets/anims/make.json";
import graph from "./assets/anims/graph.json";
import Navbar from "./components/Navbar";
import TeamSection from "./components/TeamSection";
import LiveSeller from "./components/LiveSeller";
import GraphSection from "./components/GraphSection";

function App() {
  return (
    <div
      className="2xl:p-3 xl:p-0 lg:p-0 md:p-0 sm:p-0"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      <div className="h-[94.2vh] 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-8 hidden gap-2">
        <div className="bg-light rounded-3xl shadow row-span-2">
          <LiveSeller />
        </div>

        <div className="bg-light rounded-3xl shadow row-span-2">
          {/* GraphSection */}
          <GraphSection />
        </div>

        <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-5">
          <TeamSection />
        </div>

        {/* Bu kısma ne gelecek karar veremedik buraya karar verilir daha sonradan */}
        <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl">
          <div className="h-full w-full flex">
            <div className="w-2/4 h-2/4  m-auto">
              <Lottie
                loop
                animationData={make}
                play
                style={{ width: 500, height: 500 }}
              />
            </div>
          </div>
        </div>

        <div className="bg-light h-full rounded-3xl shadow row-span-8 col-start-2 row-start-1 col-span-12">
          <div className="w-full p-5">
            <h1 className="text-8xl text-center font-bold">SIRALMA</h1>
          </div>
          <div className="overflow-y-auto max-h-[94.5%] custom-scroll rounded-3xl w-full ">
            <LiveList />
          </div>
        </div>
      </div>
      <div className="2xl:hidden">
        <div className="row">
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
