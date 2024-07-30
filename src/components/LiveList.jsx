import React from 'react';
import { GiTrophyCup } from 'react-icons/gi';

const LiveList = ({ totalSales }) => {
  const sortedSales = totalSales.slice().sort((a, b) => b.toplam_satis - a.toplam_satis);
  
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
              <span className='mr-10'>Satış</span>
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {sortedSales.map((e, index) => (
            <tr
              className={index % 2 === 0 ? "bg-sky-500" : "bg-white"}
              key={index}
            >
              <td className="py-3 pl-4 text-gray-500 text-center">
                <div className="text-lg text-black 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs">
                  <div className="m-auto">
                    {index === 0 ? (
                      <GiTrophyCup
                        className="m-auto 2xl:w-20 2xl:h-16 xl:w-9 xl:h-9 lg:w-32 lg:h-32 sm:w-3 sm:h-3 w-10 h-10"
                        color="gold"
                      />
                    ) : index === 1 ? (
                      <GiTrophyCup
                        className="m-auto 2xl:w-20 2xl:h-16 xl:w-9 xl:h-9 lg:w-6 lg:h-6 sm:w-3 sm:h-3 w-10 h-10"
                        color="#aeb0ae"
                      />
                    ) : index === 2 ? (
                      <GiTrophyCup
                        className="m-auto 2xl:w-20 2xl:h-16 xl:w-10 xl:h-10 lg:w-10 lg:h-10 sm:w-3 sm:h-3 w-10 h-10"
                        color="#CD7F32"
                      />
                    ) : (
                      index + 1
                    )}
                  </div>
                </div>
              </td>
              <td className="py-3 pl-4 text-dark text-center text-lg 2xl:text-5xl xl:text-1xl lg:text-4xl sm:text-xs">
                {e.calisan_adi}
              </td>
              <td className="py-3 pl-4 text-dark text-right text-lg 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs">
                <span className='mr-10'>{e.toplam_satis}$</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LiveList;
