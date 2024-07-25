import React, { Component } from 'react';
import io from 'socket.io-client';
import { GiTrophyCup } from 'react-icons/gi';
import services from '../service';

const socket = io('http://localhost:3000');

class LiveList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sales: [],
    };
  }

  async componentDidMount() {
    // Socket.io'dan veri al
    socket.on('newData', (data) => {
      this.handleNewData(data);
    });

    // Verileri başlangıçta almak için getTotalSales çağrısı yap
    try {
      const response = await services.getTotalSales();
      if (response && response.data) {
        this.setState({ sales: response.data });
      }
    } catch (error) {
      console.error('Total sales API çağrısı hatası:', error);
    }
  }

  componentWillUnmount() {
    socket.off('newData');
  }

  handleNewData(newData) {
    // Verinin formatını kontrol et
    if (newData && typeof newData === 'object') {
      // Eğer veri bir dizi değilse, tekil bir nesne olarak ele al
      const newSales = Array.isArray(newData) ? newData : [newData];
  
      this.setState((prevState) => {
        const updatedSales = [...prevState.sales];
        
        newSales.forEach((newItem) => {
          const { calisan_adi, toplam_satis } = newItem;
          
          const existingIndex = updatedSales.findIndex(
            (item) => item.calisan_adi === calisan_adi
          );
  
          if (existingIndex > -1) {
            // Eğer veri varsa güncelle
            updatedSales[existingIndex] = { calisan_adi, toplam_satis };
          } else {
            // Yeni veri ekle
            updatedSales.push({ calisan_adi, toplam_satis });
          }
        });
  
        return { sales: updatedSales };
      });
    } else {
      console.error('Beklenmeyen veri formatı:', newData);
    }
  }
  

  render() {
    const { sales } = this.state;

    // Satışları azalan sıraya göre sıralama
    const sortedSales = sales.slice().sort((a, b) => b.toplam_satis - a.toplam_satis);

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
                className="px-6 py-3 2xl:text-5xl lg:text-xs font-bold text-center text-gray-500 uppercase"
              >
                Satış
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
                <td className="py-3 pl-4 text-dark text-center text-lg 2xl:text-5xl xl:text-1xl lg:text-xl sm:text-xs">
                  {e.toplam_satis}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LiveList;
