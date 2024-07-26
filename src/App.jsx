import React, { useEffect, useState } from "react";
import "./App.css";
import backgroundImg from "./assets/image/Zemin.png";
import Navbar from "./components/Navbar";
import TvComp from "./components/tv/TvComp";
import useSound from "use-sound";
import sound from "./assets/sound/mixkit-video-game-treasure-2066.wav";
import services from "./service/index";
import DesktopComp from "./components/desktop/DesktopComp";
import io from "socket.io-client";

function App() {
  const [sales, setSales] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [play] = useSound(sound, { volume: 1 });
  const [isConfetti, setIsConfetti] = useState(false);

  useEffect(() => {
    // Socket.io bağlantısını kur
    const socket = io("http://localhost:3000");

    // Sunucudan gelen 'newData' olaylarını dinle
    socket.on("newData", (newData) => {
      console.log("Yeni veri alındı:", newData);

      setSales((prevSales) => {
        const exists = prevSales.some(
          (sale) =>
            sale.HIZMET === newData.HIZMET &&
            sale.TARIH === newData.TARIH &&
            sale.FIYAT === newData.FIYAT
        );

        if (!exists) {
          // Yeni veri eklendiğinde sesi çal
          play();
          
          // Konfeti efektini ayarla ve 2 saniye sonra sıfırla
          setIsConfetti(true);
          setTimeout(() => {
            setIsConfetti(false);
          }, 3000);
          
          return [newData, ...prevSales];
        }

        return prevSales;
      });
    });

    // Sunucudan gelen 'newTotalSales' olaylarını dinle
    socket.on("newTotalSales", (newTotalSales) => {
      console.log("Yeni toplam satış verisi alındı:", newTotalSales);
      setTotalSales(newTotalSales);
    });

    // Veritabanından başlangıç verilerini al
    const fetchData = async () => {
      try {
        const response = await services.getAllSales();
        setSales(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchTotalSales = async () => {
      try {
        const response = await services.getTotalSales();
        setTotalSales(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    fetchTotalSales();

    // Bileşen unmount olduğunda socket bağlantısını kes
    return () => {
      socket.disconnect();
    };
  }, [play]); // play fonksiyonunu bağımlılıklara ekleyin

  return (
    <div
      className="2xl:p-3 xl:p-0 lg:p-0 md:p-0 sm:p-0"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <Navbar />
      <TvComp  salesList={sales} />
      <DesktopComp isConfetti={isConfetti} totalSales={totalSales} sales={sales} />
    </div>
  );
}

export default App;
