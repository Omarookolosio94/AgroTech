import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { activelinks, links, navbtn } from "core/const/styling";
import Sidenav from "./sidenav";
import { logo } from "core/const/images";

const Navbar = () => {
  const [showSidenav, setSidenav] = useState(false);
  return (
    <>
      <div
        className="fixed left-0 right-0 top-0 bg-opacity-10 backdrop-blur-sm backdrop-filter"
        style={{
          zIndex: 1000,
        }}
      >
        <nav className="mx-auto flex w-11/12 items-center justify-between py-2 md:w-4/5">
          <Link to="/public/home" className="w-[60px]">
            <img src={logo} alt="zoges agro" className="" loading="lazy" />
          </Link>
          <div className="flex items-center justify-between gap-2">
            <NavLink
              to="/public/company"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/public/services"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              Services
            </NavLink>

            <NavLink
              to="/public/contact"
              className={({ isActive }) => (isActive ? activelinks : links)}
            >
              Contact
            </NavLink>
            <button
              className="border-1 border p-2 md:hidden bg-white text-black"
              onClick={() => setSidenav(!showSidenav)}
            >
              <img
                src="https://onedrive.live.com/embed?resid=B8295C03D418D49B%21837&authkey=%21AIRb8-NWoRsGsww&width=700&height=586"
                alt=""
                loading="lazy"
                className="h-[24px] w-[24px]"
              />
            </button>
          </div>
        </nav>
      </div>
      <Sidenav isOpen={showSidenav} close={() => setSidenav(false)} />
    </>
  );
};

export default Navbar;
