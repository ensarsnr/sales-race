import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";
import backgroundImg from "./assets/image/Zemin.png";
import logo from "./assets/image/Acıbadem-Health-Point-Logo-Beyaz.png";
import Lottie from "react-lottie-player";
import comingsoon from "./assets/anims/comingsoon.json";
import make from "./assets/anims/make.json";

function App() {
  return (
    <div className="p-5" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <nav style={{ height: "3vh" }} className="navbar">
        <span className="nav-brand text-red-600">
          <img src={logo} className="w-50 h-50 ml-10 mt-2" />
        </span>
      </nav>

      <div className="h-[94.5vh] grid grid-cols-2 grid-rows-8 gap-4">
        <div className="bg-light rounded-3xl shadow row-span-2">
          <div className="w-full p-14 text-center font-bold">
            <span className="text-8xl">Ahmet</span>
          </div>
          <div className="h-4/6 flex">
            <div className="shadow m-auto w-2/4 rounded-3xl h-5/6 bg-black">s</div>
          </div>
        </div>
        <div className="bg-light rounded-3xl shadow row-span-2">
          <div className="w-full text-center p-5 ">
            <span className="text-8xl font-bold">Grafik</span>
          </div>
        </div>
        <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-5">
          <div className="h-full w-full flex">
            <div className="w-2/4 h-2/4  m-auto">
              <Lottie loop animationData={comingsoon} play style={{width: 500, height: 500}} />
            </div>
          </div>
        </div>
        <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl">
        <div className="h-full w-full flex">
            <div className="w-2/4 h-2/4  m-auto">
              <Lottie loop animationData={make} play style={{width: 500, height: 500}} />
            </div>
          </div>
        </div>
        <div className="bg-light h-full rounded-3xl shadow row-span-8 col-start-2 row-start-1">
          <div className="w-full p-5">
            <h1 className="text-8xl text-center font-bold">Sıralama</h1>
          </div>
          <div className="overflow-y-auto max-h-[94.5%] custom-scroll rounded-3xl w-full ">
            <LiveList />
            </div>
        </div>
      </div>

      
    </div>
  );
}

export default App;
