import React from "react";
import { GiTrophyCup } from "react-icons/gi";

function LiveList() {
  const salesList = [
    {
      name: "Ayşe",
      team: "takım1",
      sales: "$2000",
    },
    {
      name: "Ahmet",
      team: "takım2",
      sales: "$3000",
    },
    {
      name: "Fatma",
      team: "takım2",
      sales: "$13000",
    },
    {
      name: "Kerem",
      team: "takım1",
      sales: "$1000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
    },
    {
      name: "Deniz",
      team: "takım2",
      sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
      {
        name: "Deniz",
        team: "takım2",
        sales: "$5000",
      },
  ];

  return (
    <div className="table-container">
    <table className="w-full min-w-full shadow divide-y divide-gray-200 rounded-lg">
      <thead className="bg-white rounded-t-lg">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 2xl:text-xl lg:text-xs font-bold text-center text-gray-500 uppercas"
          >
            Sıralama
          </th>
          <th
            scope="col"
            className="px-6 py-3 2xl:text-xl lg:text-xs font-bold text-center text-gray-500 uppercas"
          >
            İsim
          </th>
          <th
            scope="col"
            className="px-6 py-3 2xl:text-xl lg:text-xs font-bold text-center text-gray-500 uppercas"
          >
            Takım
          </th>
          <th
            scope="col"
            className="px-6 py-3 2xl:text-xl lg:text-xs font-bold text-center text-gray-500 uppercas"
          >
            Satış
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {salesList.map((e, index) => (
          <tr
            className={
              index % 2 === 0
                ? "bg-gradient-to-bl from-pink-300 to-pink-400"
                : "bg-white"
            }
            key={index}
          >
            <td className="py-3 pl-4 text-gray-500 text-center">
              <div className=" text-lg 2xl:text-2xl xl:text-1xl lg:text-xl sm:text-xs">
                <div className="m-auto">
                  {index === 0 ? (
                    <GiTrophyCup
                      className="m-auto 2xl:w-20 2xl:h-20 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                      color="gold"
                    />
                  ) : index === 1 ? (
                    <GiTrophyCup
                      className="m-auto 2xl:w-20 2xl:h-20 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                      color="#aeb0ae"
                    />
                  ) : index === 2 ? (
                    <GiTrophyCup
                      className="m-auto 2xl:w-20 2xl:h-20 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                      color="#CD7F32"
                    />
                  ) : (
                    index + 1
                  )}
                </div>
              </div>
            </td>
            <td className="py-3 pl-4 text-gray-500 text-center text-lg 2xl:text-2xl xl:text-1xl lg:text-xl sm:text-xs">
              {e.name}
            </td>
            <td className="py-3 pl-4 text-gray-500 text-center text-lg 2xl:text-2xl xl:text-1xl lg:text-xl sm:text-xs">
              {e.team}
            </td>
            <td className="py-3 pl-4 text-gray-500 text-center text-lg 2xl:text-2xl xl:text-1xl lg:text-xl sm:text-xs">
              {e.sales}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  );
}

export default LiveList;
