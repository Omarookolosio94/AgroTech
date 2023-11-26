import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  activelinks,
  documentGif,
  grid,
  homeIcon,
  links,
  logo,
  navbtn,
  questions,
  quotes,
  truck,
} from 'core/const/styling';
import Sidenav from './sidenav';

const Navbar = () => {
  const [showSidenav, setSidenav] = useState(false);
  return (
    <>
      <div
        className="fixed top-0 left-0 right-0 border border-b-darkwhite"
        style={{
          background: 'rgb(254, 254, 254)',
          zIndex: 1000,
        }}
      >
        <nav className="flex justify-between items-center my-1 py-2 w-11/12 md:w-4/5 mx-auto">
          <Link to="/public/home" className="w-[60px]">
            <img src={logo} alt="zoges agro" className="w-[75px] h-[60px]" />
          </Link>
          <div className="hidden transition duration-300 ease-in-out md:flex justify-between gap-3">
            <NavLink
              to="/public/home"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              <div className="flex items-center gap-2">
                <span>Home</span>
                <img src={homeIcon} alt="" className="w-[24px] h-[24px]" />
              </div>
            </NavLink>
            <NavLink
              to="/public/services"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              <div className="flex items-center gap-2">
                <span>Services</span>
                <img src={documentGif} alt="" className="w-[24px] h-[24px]" />
              </div>
            </NavLink>
            <NavLink
              to="/public/company"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              <div className="flex items-center gap-2">
                <span>Company</span>
                <img src={truck} alt="" className="w-[24px] h-[24px]" />
              </div>
            </NavLink>
          </div>
          <div className="flex justify-between items-center gap-2">
            <Link to="/public/contact" className={`${navbtn}`}>
              <span>Contact Us</span>
              <img src={questions} alt="" className="w-[24px] h-[24px]" />
            </Link>
            <button
              className="md:hidden border border-2 border-cus px-2 py-1 mr-3"
              onClick={() => setSidenav(!showSidenav)}
            >
              <img src={grid} alt="" className="w-[24px] h-[24px]" />
            </button>
          </div>
        </nav>
      </div>
      <Sidenav isOpen={showSidenav} close={() => setSidenav(false)} />
    </>
  );
};

export default Navbar;
