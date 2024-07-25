import React from "react";
import Lottie from "react-lottie-player";
import graph from "../../assets/anims/graph.json";
import LiveList from "../../components/LiveList";
import party from "../../assets/anims/party.json";

function DesktopComp({ totalSales, sales }) {
  console.log(sales);

  return (
    <div className="h-full 2xl:hidden p-3 grid grid-cols-2 gap-3">
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
        <div className="text-center text-3xl">
          {sales.length > 0
            ? sales[sales.length - 1].calisan_adi
            : "Yükleniyor..."}
        </div>
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
        <div className="block w-full h-64 overflow-y-auto">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th className="px-1 bg-blueGray-50 text-blueGray-500  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  No
                </th>
                <th className="px-1 bg-blueGray-50 text-blueGray-500  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  İsim
                </th>
                <th className="px-1 bg-blueGray-50 text-blueGray-500  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Hizmet
                </th>
                <th className="px-1 bg-blueGray-50 text-blueGray-500  text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
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
                  <th className="px-1 border-t-0 align-middle border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2 text-left text-blueGray-700">
                    {index + 1}
                  </th>
                  <th className="px-1 border-t-0 align-middle border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2 text-left text-blueGray-700 ">
                    {sale.calisan_adi}
                  </th>
                  <td className="px-1 border-t-0 align-middle border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2 ">
                    {sale.hizmet}
                  </td>
                  <td className="px-1 border-t-0 align-center border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2">
                    {sale.fiyat} {sale.para_birimi}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-light md:overflow-x-auto col-span-2 rounded-xl shadow">
        <LiveList totalSales={totalSales} />
      </div>
    </div>
  );
}

export default DesktopComp;
