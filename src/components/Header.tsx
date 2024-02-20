import { useState, useEffect } from "react";

import { headerData } from "../data";

import { TiThMenuOutline } from "react-icons/ti";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  const { logo } = headerData;
  return (
    <header className={` ${ isActive  ? "shadow-xl":"shadow-none"  } fixed left-0 top-0 w-screen z-50 duration-300`}>
      <div className={`max-w-[1920px] mx-auto bg-[#E5E5E5]`}>
        <div className="container mx-auto py-3">
          <div className="flex justify-between items-center">
            <a href="/">
              <img className="h-[75px]" src={logo} alt="" />
            </a>
            <div className="hidden xl:block">
              <Nav />
            </div>
            <div className="hidden xl:block">
              <Socials />
            </div>
            <button
              onClick={() => setNavMobile(!navMobile)}
              className="text-3xl xl:hidden bg-dark text-white p-2 rounded-md "
            >
              <TiThMenuOutline />
            </button>
            <div
              className={` ${
                navMobile ? "max-h-screen" : "max-h-0"
              } h-screen  fixed bg-[#E5E5E5] w-screen top-0 left-0 -z-10 xl:hidden  transition-all duration-300 overflow-hidden`}
            >
              <NavMobile />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
