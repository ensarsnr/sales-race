import React from "react";
import LiveSeller from "../LiveSeller";
import GraphSection from "../GraphSection";
import TeamSection from "../TeamSection";
import LiveList from "../LiveList";
function TvComp({ isConfetti, totalSales, sales }) {

  return (
    <div className="h-[94.2vh] 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-8 hidden gap-2">
      <LiveSeller isConfetti={isConfetti} sales={sales} />
      {/* GraphSection */}
      <GraphSection />
      <TeamSection />
      {/* Bu kısma ne gelecek karar veremedik buraya karar verilir daha sonradan */}
      <div
        className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl"
      >
        <div className="h-full w-full flex-col">
          <div className="w-full  text-center p-10">
            <span className="font-bold">Anlık Satış</span>
          </div>
          <div className="m-auto p-10">
            <div className="block w-full h-[17vh] overflow-y-auto">
              <table className="items-center  bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500  text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      İsim
                    </th>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500  text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Hizmet
                    </th>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500  text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Satış
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sales.toReversed().map((sale, index) => (
                    <tr
                      className={index % 2 === 0 ? "bg-gray-100" : ""}
                      key={index}
                    >
                      <th className="px-0 py-3 border-t-0 align-middle border-l-0 border-r-0 text-4xl whitespace-nowrap p-2 text-left text-blueGray-700 ">
                        {sale.calisan_adi}
                      </th>
                      <td className="px-0 py-3 border-t-0 align-middle border-l-0 border-r-0 text-4xl whitespace-nowrap p-2 ">
                        {sale.hizmet}
                      </td>
                      <td className="px-0 py-3 border-t-0 align-center border-l-0 border-r-0 text-4xl whitespace-nowrap p-2">
                        {sale.fiyat} {sale.para_birimi}
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
          <LiveList totalSales={totalSales} sales={sales} />
        </div>
      </div>
    </div>
  );
}

export default TvComp;
