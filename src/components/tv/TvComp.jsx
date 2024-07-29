import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import LiveSeller from "../LiveSeller";
import GraphSection from "../GraphSection";
import TeamSection from "../TeamSection";
import LiveList from "../LiveList";
import services from "../../service";

const socket = io("http://localhost:3000");

function TvComp({ isConfetti }) {
  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState([]);

  // Veriyi API'den çek ve socket ile gelen verilerle güncelle
  useEffect(() => {
    const fetchSales = async () => {
      try {
        const response = await services.getAllSales();
        if (response && response.data) {
          const initialSales = response.data.map((item) => ({
            calisan_adi: item.SATIS || item.calisan_adi,
            hizmet: item.HIZMET || item.hizmet,
            fiyat: item.FIYAT || item.fiyat,
            para_birimi: item.PARA_BIRIMI || item.para_birimi,
            id:
              item.id ||
              `${item.SATIS}-${item.HIZMET}-${item.FIYAT}-${item.PARA_BIRIMI}`,
          }));
          setSales(initialSales);
        }
      } catch (error) {
        console.log("Error fetching initial sales:", error);
      }
    };

    fetchSales();

    socket.on("newData", (data) => {
      console.log("Gelen veri:", data);

      // Eğer veri tekil bir nesne ise, bunu diziye dönüştürün
      const dataArray = Array.isArray(data) ? data : [data];

      // Verileri uygun formata dönüştürme
      const formattedData = dataArray.map((item) => ({
        calisan_adi: item.CALISAN_ADI || "Bilinmiyor",
        hizmet: item.HIZMET || "Bilinmiyor",
        fiyat: item.FIYAT || 0,
        para_birimi: item.PARA_BIRIMI || "Bilinmiyor",
      }));

      // Önceki satışları güncelleyerek yeni verileri ekleme
      setSales((prevSales) => {
        const existingSalesSet = new Set(
          prevSales.map((sale) =>
            JSON.stringify({
              calisan_adi: sale.calisan_adi,
              hizmet: sale.hizmet,
              fiyat: sale.fiyat,
              para_birimi: sale.para_birimi,
            })
          )
        );

        const newSales = formattedData.filter(
          (sale) =>
            !existingSalesSet.has(
              JSON.stringify({
                calisan_adi: sale.calisan_adi,
                hizmet: sale.hizmet,
                fiyat: sale.fiyat,
                para_birimi: sale.para_birimi,
              })
            )
        );

        return [...prevSales, ...newSales];
      });
    });

    socket.on("totalSales", (data) => {
      console.log("Toplam satış verisi:", data);
      setTotalSales(data);
    });

    return () => {
      socket.off("newData");
      socket.off("totalSales");
    };
  }, []);

  return (
    <div className="h-[94.2vh] 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-8 hidden gap-2">
      <LiveSeller isConfetti={isConfetti} sales={sales} />
      <GraphSection />
      <TeamSection />
      <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl">
        <div className="h-full w-full flex-col">
          <div className="w-full text-center p-10">
            <span className="font-bold">Anlık Satış</span>
          </div>
          <div className="m-auto p-10">
            <div className="block w-full h-[17vh] overflow-y-auto">
              <table className="items-center bg-transparent w-full border-collapse">
                <thead>
                  <tr>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500 text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      İsim
                    </th>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500 text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Hizmet
                    </th>
                    <th className="px-1 bg-blueGray-50 text-blueGray-500 text-5xl uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Satış
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {sales.toReversed().map((sale, index) => (
                    <tr
                      className={index % 2 === 0 ? "bg-gray-100" : ""}
                      key={sale.id || index}
                    >
                      <th className="px-0 py-3 border-t-0 align-middle border-l-0 border-r-0 text-4xl whitespace-nowrap p-2 text-left text-blueGray-700">
                        {sale.calisan_adi}
                      </th>
                      <td className="px-0 py-3 border-t-0 align-middle border-l-0 border-r-0 text-4xl whitespace-nowrap p-2">
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
          <h1 className="text-8xl text-center font-bold">SIRALAMA</h1>
        </div>
        <div className="overflow-y-auto max-h-[94.5%] custom-scroll rounded-3xl w-full">
          <LiveList totalSales={totalSales} />
        </div>
      </div>
    </div>
  );
}

export default TvComp;
