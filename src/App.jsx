import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";
import backgroundImg from "./assets/image/Zemin.png";
import make from "./assets/anims/make.json";
import Navbar from "./components/Navbar";
import Lottie from "react-lottie-player";
import graph from "./assets/anims/graph.json";
import TvComp from "./components/tv/TvComp";

function App() {
  return (
    <div
      className="2xl:p-3 xl:p-0 lg:p-0 md:p-0 sm:p-0"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          <Lottie loop play animationData={party} />
        </div>
      </div> */}
      <Navbar />
      <TvComp />
      {/* Laptop-Masaüstü görünümü */}
      <div className="h-full 2xl:hidden p-3 grid grid-cols-2  gap-3">
        <div className="bg-light rounded-xl shadow-md p-4">
          <div className="text-center text-3xl">sad</div>
          <div className="bg-black w-3/4 m-auto shadow-md h-3/4 mt-3 rounded-xl"></div>
        </div>
        <div className="bg-light rounded-xl shadow-md p-4">
          <Lottie play loop animationData={graph} />
        </div>
        <div className="bg-light rounded-xl shadow-md p-4">
          <div className="text-center text-3xl">sad</div>
          <div className="bg-black w-3/4 m-auto shadow-md h-3/4 mt-3 rounded-xl"></div>
        </div>
        <div className="bg-light rounded-xl shadow-md p-4 flex">
          <Lottie play loop animationData={make} className=" m-auto" />
        </div>
        <div className="bg-light md:overflow-x-auto  col-span-2 rounded-xl shadow">
          <LiveList />
        </div>
      </div>
    </div>
  );
}

export default App;
