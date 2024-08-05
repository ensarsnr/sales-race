import React from "react";
// import { GiTrophyCup } from "react-icons/gi";
// import Lottie from "react-lottie-player";
// import goldCup from "../assets/anims/goldcup.json";
// import silverCup from "../assets/anims/silvercup.json";
// import bronzeCup from "../assets/anims/bronzecup.json";

const LiveList = ({ totalSales }) => {
  const sortedSales = totalSales
    .slice()
    .sort((a, b) => b.toplam_satis - a.toplam_satis);

  // isim filtreleme
  const normalizeName = (name) => {
    return name.replace(/\s+/g, "").toLowerCase();
  };

  return (
    <div className="table-container xl:overflow-x-hidden overflow-x-auto">
      <table className="w-full min-w-full shadow divide-y divide-gray-200 rounded-lg">
        <thead className="bg-white rounded-t-lg">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 2xl:text-5xl lg:text-xs font-bold text-center text-gray-500 uppercase"
            >
              NO
            </th>
            <th
              scope="col"
              className="px-6 py-3 2xl:text-5xl lg:text-xs font-bold text-center text-gray-500 uppercase"
            >
              İsim-Soyisim
            </th>
            <th
              scope="col"
              className="px-6 py-3 2xl:text-5xl lg:text-xs font-bold text-right text-gray-500 uppercase"
            >
              <span className="mr-10">Satış</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedSales
            .filter(
              (e) =>
                normalizeName(e.calisan_adi) !==
                normalizeName("Murtaza Orçun Başar")
            ) // Murtaza Orçun Başar'ı filtrele
            .map((e, index) => (
              <tr
                className={
                  index % 2 === 0
                    ? "bg-[#00387E] text-light"
                    : "bg-white text-dark"
                }
                key={index}
              >
                <td
                  className={
                    index % 2 === 0
                      ? "text-light py-3 pl-4 text-center"
                      : "text-light py-3 pl-4 text-center text-dark"
                  }
                >
                  <div className="text-lg  2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs">
                    <div className="m-auto">
                      {index + 1}
                      {/* {index === 0 ? (
                        <Lottie
                          className="m-auto 2xl:w-32 2xl:h-24 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                          loop
                          play
                          animationData={goldCup}
                        />
                      ) : // <GiTrophyCup
                      //   className="m-auto 2xl:w-20 2xl:h-16 xl:w-9 xl:h-9 lg:w-32 lg:h-32 sm:w-3 sm:h-3 w-10 h-10"
                      //   color="gold"
                      // />
                      index === 1 ? (
                        <Lottie
                          className="m-auto 2xl:w-32 2xl:h-24 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                          loop
                          play
                          animationData={silverCup}
                        />
                      ) : index === 2 ? (
                        <Lottie
                          className="m-auto 2xl:w-32 2xl:h-24 xl:w-10 xl:h-10 lg:w-10 lg:h-10 sm:w-3 sm:h-3 w-10 h-10"
                          loop
                          play
                          animationData={bronzeCup}
                        />
                      ) : (
                        index + 1
                      )} */}
                    </div>
                  </div>
                </td>
                <td className="py-3 pl-4 text-center text-lg 2xl:text-5xl xl:text-1xl lg:text-4xl sm:text-xs">
                  {e.calisan_adi}
                </td>
                <td className="py-3 pl-4 text-right text-lg 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs">
                  <span className="mr-10">{e.toplam_satis}$</span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveList;
