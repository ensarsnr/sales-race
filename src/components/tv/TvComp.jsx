import React from 'react'
import LiveSeller from '../LiveSeller'
import GraphSection from '../GraphSection'
import TeamSection from '../TeamSection'
import Lottie from 'react-lottie-player'
import LiveList from '../LiveList'
import make from "../../assets/anims/make.json"

function TvComp() {
  return (
    <div className="h-[94.2vh] 2xl:grid 2xl:grid-cols-2 2xl:grid-rows-8 hidden gap-2">
    <LiveSeller />
    {/* GraphSection */}
    <GraphSection />
    <TeamSection />
    {/* Bu kısma ne gelecek karar veremedik buraya karar verilir daha sonradan */}
    <div className="bg-light rounded-3xl shadow row-span-2 col-start-1 row-start-7 text-8xl">
      <div className="h-full w-full flex">
        <div className="w-2/4 h-2/4  m-auto">
          <Lottie
            loop
            animationData={make}
            play
            style={{ width: 500, height: 500 }}
          />
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
  )
}

export default TvComp