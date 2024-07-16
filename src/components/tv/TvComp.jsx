import React from "react";
import LiveSeller from "../LiveSeller";
import GraphSection from "../GraphSection";
import TeamSection from "../TeamSection";
import LiveList from "../LiveList";
import sound from "../../assets/sound/mixkit-video-game-treasure-2066.wav";
import useSound from "use-sound";
function TvComp() {
  const [play] = useSound(sound);

  const nameList = [
    { name: "Meryem Yıldız", team: "Takım1", sel: 341 },
    { name: "Leyla Kaplan", team: "Takım2", sel: 319 },
    { name: "Halil İbrahim Güneş", team: "Takım1", sel: 3421 },
    { name: "Metin Köse", team: "Takım2", sel: 141 },
    { name: "Esra Güler", team: "Takım2", sel: 3341 },
  ];

  return (
    <div className="h-[94.2vh] 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-8 hidden gap-2">
      <LiveSeller />
      {/* GraphSection */}
      <GraphSection />
      <TeamSection />
      {/* Bu kısma ne gelecek karar veremedik buraya karar verilir daha sonradan */}
      <div
        onMouseEnter={play}
        className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl"
      >
        <div className="h-full w-full flex-col">
          <div className="w-full text-center p-10">
            <span>Anlık Veriler</span>
          </div>
          <div className="m-auto p-10">
            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead className="bg-white rounded-t-lg">
                  <tr>
                    <th class="px-6 py-3  bg-blueGray-50 text-blueGray-500 align-middle 2xl:text-5xl lg:text-xs text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      İsim
                    </th>
                    <th class="px-6  py-3 bg-blueGray-50 text-blueGray-500 align-middle 2xl:text-5xl lg:text-xs text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Takım
                    </th>
                    <th class="px-6 py-3 bg-blueGray-50 text-blueGray-500 align-middle 2xl:text-5xl lg:text-xs text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Satış
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {nameList.map((e) => (
                    <tr>
                      <th class="py-3 border 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                        {e.name}
                      </th>
                      <td class="py-3 border 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                        {e.team}{" "}
                      </td>
                      <td class="py-3 border 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        {e.sel}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
  );
}

export default TvComp;
