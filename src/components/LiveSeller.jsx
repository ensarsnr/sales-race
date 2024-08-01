import React from "react";
import Lottie from "react-lottie-player";
import party from "../assets/anims/party.json";
import { IoMdPerson } from "react-icons/io";


function LiveSeller({ isConfetti, sales }) {
  return (
    <div className="bg-light rounded-3xl shadow row-span-2">
      <div style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: 10,
            pointerEvents: "none",
          }}
        >
          {isConfetti ? <Lottie loop play animationData={party} /> : <></>}
        </div>
      </div>
      <div className="w-full p-5 text-center">
        <span className="2xl:text-8xl xl:text-6xl lg:text-5xl font-bold">
        {sales.length > 0
            ? sales[sales.length - 1].calisan_adi
            : "Yükleniyor..."}
        </span>
      </div>
      <div className="h-4/6">
        <div className=" m-auto w-3/4 rounded-3xl h-full">
        <IoMdPerson className=" w-full h-full" />

        </div>
      </div>
    </div>
  );
}

export default LiveSeller;
