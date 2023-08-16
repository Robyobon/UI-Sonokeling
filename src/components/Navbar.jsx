import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../Asset/logo1.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import "../index.css";

function Navbar() {
  const [nav, setNav] = useState(false);


  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const navbar = document.getElementById("navbar");

      if (currentScrollY > 0) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 

  return (
    <nav id="navbar" className="navbar flex items-center h-16 max-w-full desktop:px-[46px] tablet:px-[100px] z-40">
      <div className="flex items-center space-x-4 pr-8">
        <Link to="/home"> 
          <img src={logo} alt="Logo" className="h-8 mt-2 tablet:px-0 smartphone:px-6" />
        </Link>
        <ul className="smartphone:hidden flex mt-2 tablet:hidden">
          <li className="p-4 text-white">
            <Link to="/home">HOME</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/tentang">TENTANG</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/layanan">LAYANAN</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/klien">KLIEN</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/contact">KONTAK</Link>
          </li>
        </ul>
      </div>
      <div className="ml-auto flex items-center space-x-4 pr-8 mt-2 smartphone:mr-16">
        
      </div>
      <div
        onClick={handleNav}
        className="block desktop:hidden z-50 fixed mt-0 right-12 tablet:right-14"
      >
        {!nav ? <AiOutlineMenu size={20} color="white" /> : <AiOutlineClose size={20} color="white" />}
      </div>
      <div
        className="fixed left-0 top-0 w-full h-full bg-[#47B5FF] opacity-90 transition-all duration-500 z-40"
        style={{ transform: nav ? "translateX(0)" : "translateX(-100%)" }}
      >
        <img src={logo} alt="Logo" className="h-8 m-0 px-6 mt-5  " />
        <ul className="w-full h-full flex flex-col items-center justify-center text-center uppercase">
          <li className="p-4 text-white">
            <Link to="/home">HOME</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/tentang">TENTANG</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/layanan">LAYANAN</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/klien">KLIEN</Link>
          </li>
          <li className="p-4 text-white">
            <Link to="/contact">KONTAK</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
