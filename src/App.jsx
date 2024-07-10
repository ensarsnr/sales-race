import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";

function App() {
  return (
      <div id="cssportal-grid" className="bg-light">
        <div
          className="rounded bg-light shadow d-flex align-items-center justify-content-center"
          id="div1"
        >
          <div className="row  w-100 h-75">
            <div className="col d-flex align-items-center justify-content-start">
              <div className="ml-2 text-light w-75 text-center ">
                <span className="2xl:text-8xl xl:text-5xl lg:text-3xl md:3xl text-gray-600 font-bold">Ayşe </span>
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
            <div className="col-12 text-center flex ml-3 rounded ">
              <h1 className="text-gray-600 m-auto 2xl:text-6xl xl:text-4xl lg:text-2xl font-bold">Anlık Satışlar</h1>
            </div>
          </div>
          <div className="row h-[90%] w-[100%] m-auto">
            <div className="col-12 overflow-y-auto max-h-[98%] custom-scroll">
              <LiveList />
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
