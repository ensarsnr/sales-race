import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";
import backgroundImg from "./assets/image/Zemin.png";
import logo from "./assets/image/Acıbadem-Health-Point-Logo-Beyaz.png";

function App() {
  return (
    <div className="p-5" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <nav style={{ height: "3vh" }} className="navbar">
        <span className="nav-brand text-red-600">
          <img src={logo} className="w-50 h-50 ml-10 mt-2" />
        </span>
      </nav>

      {/* <div className="grid grid-cols-2 grid-rows-8 gap-4">
        <div className="row-span-2">
        </div>
        <div className="row-span-2 col-start-1 row-start-4">6</div>
        <div className="row-span-2 col-start-1 row-start-7">7</div>
        <div className="row-span-8 col-start-2 row-start-1">8</div>
      </div> */}

      <div id="cssportal-grid" className=" content">
        <div
          className="rounded bg-light shadow d-flex align-items-center justify-content-center"
          id="div1"
        >
          <div className="row w-100 h-75">
            <div className="col d-flex align-items-center justify-content-start">
              <div className="ml-2 text-light w-75 text-center">
                <span className="2xl:text-8xl xl:text-5xl lg:text-3xl md:3xl text-gray-600 font-bold">
                  Ayşe{" "}
                </span>
              </div>
            </div>
            <div className="col bg-red-300 mr-3 rounded shadow">
              {/* BURAYA RESİMLER GELECEK.... */}
            </div>
          </div>
        </div>
        <div className="rounded bg-light shadow" id="div2">
          div2
        </div>
        <div className="rounded bg-light border shadow" id="div3">
          <div className="row h-[10%] w-100">
            <div className="col-12 text-center flex ml-3 rounded">
              <h1 className="text-blue-400 m-auto 2xl:text-9xl xl:text-4xl lg:text-2xl font-bold">
                Anlık Satışlar
              </h1>
            </div>
          </div>
          <div className="row h-[90%] w-[100%] m-auto">
            <div className="col-12 overflow-y-auto max-h-[98%] custom-scroll">
              <LiveList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
