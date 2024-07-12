import React from 'react'
import logo from "../assets/image/Acıbadem-Health-Point-Logo-Beyaz.png";

function Navbar() {
  return (
    <nav className="h-[5vh] 2xl:h-[5vh] navbar">
        <span className="nav-brand text-red-600">
          <img src={logo} className="2xl:w-50 2xl:h-50 2xl:hidden w-32 ml-10 xl:mt-2" />
          <img src={logo} className="2xl:w-50 2xl:h-50 hidden 2xl:block ml-2 xl:mt-2" />
        </span>
      </nav>
  )
}

export default Navbar