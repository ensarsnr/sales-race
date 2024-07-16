import React from "react";
import "./App.css";
import LiveList from "./components/LiveList";
import backgroundImg from "./assets/image/Zemin.png";
import Navbar from "./components/Navbar";
import Lottie from "react-lottie-player";
import graph from "./assets/anims/graph.json";
import TvComp from "./components/tv/TvComp";
import party from "./assets/anims/party.json";
import useSound from "use-sound";
import sound from "./assets/sound/mixkit-video-game-treasure-2066.wav";

function App() {
  const [play] = useSound(sound);

  return (
    <div
      onClick={play}
      className="2xl:p-3 xl:p-0 lg:p-0 md:p-0 sm:p-0"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      <TvComp />
      {/* Laptop-Masaüstü görünümü */}
      <div className="h-full 2xl:hidden p-3 grid grid-cols-2  gap-3">
        <div className="bg-light rounded-xl shadow-md p-4">
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
              <Lottie loop play animationData={party} />
            </div>
          </div>
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
          <div class="block w-full overflow-x-auto">
            <table class="items-center bg-transparent w-full border-collapse ">
              <thead>
                <tr>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    İsim
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Takım
                  </th>
                  <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Satış
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    Meryem Yıldız
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    4,569
                  </td>
                  <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    340
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    Leyla Kaplan
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3,985
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    319
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    Halil İbrahim Güneş
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    3,513
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    294
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    Metin Köse
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    2,050
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    147
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700">
                    Esra Güler
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    1,795
                  </td>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    190
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-light md:overflow-x-auto  col-span-2 rounded-xl shadow">
          <LiveList />
        </div>
      </div>
    </div>
  );
}

export default App;
