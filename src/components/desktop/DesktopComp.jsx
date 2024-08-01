import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
import graph from "../../assets/anims/graph.json";
import LiveList from "../../components/LiveList";
import party from "../../assets/anims/party.json";
import { io } from "socket.io-client";
import services from "../../service";

const socket = io("http://192.168.40.224:3000");

function DesktopComp({ isConfetti }) {
  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState([]);

  const normalizeName = (name) => {
    return name.replace(/\s+/g, "").toLowerCase();
  };

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
        calisan_adi: item.CALISAN_ADI || item.calisan_adi,
        hizmet: item.HIZMET || item.hizmet,
        fiyat: item.FIYAT || 0,
        para_birimi: item.PARA_BIRIMI || item.para_birimi,
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
            {isConfetti ? <Lottie loop play animationData={party} /> : <></>}
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
        <div className="text-center text-3xl">Takım-1</div>
        <div className="bg-black w-3/4 m-auto shadow-md h-3/4 mt-3 rounded-xl"></div>
      </div>
      <div className="bg-light rounded-xl shadow-md p-4 flex">
        <div className="scrollbar-hide overflow-y-auto block w-full h-64">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead>
              <tr>
                <th className="px-1 bg-blueGray-50 text-blueGray-500 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  İsim
                </th>
                <th className="px-1 bg-blueGray-50 text-blueGray-500 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-center">
                  Hizmet
                </th>
                <th className="text-end px-1 bg-blueGray-50 text-blueGray-500 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                  Satış
                </th>
              </tr>
            </thead>
            <tbody>
              {sales
                .filter(
                  (e) =>
                    normalizeName(e.calisan_adi) !==
                    normalizeName("Murtaza Orçun Başar")
                )
                .slice()
                .reverse()
                .map((sale, index) => (
                  <tr
                    className={index % 2 === 0 ? "bg-gray-100" : ""}
                    key={index}
                  >
                    <th className="text-left px-1 border-t-0 align-middle border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2  text-blueGray-700">
                      {sale.calisan_adi}
                    </th>
                    <td className="text-center overflow-hidden max-w-[20ch]  px-1 border-t-0 align-middle border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2">
                      {sale.hizmet}
                    </td>
                    <td className="px-1 border-t-0 align-center float-end border-l-0 border-r-0 text-[8px] whitespace-nowrap p-2">
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
