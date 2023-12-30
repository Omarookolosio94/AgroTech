import { activeSidenavLink, sidenavLink } from "core/const/styling";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidenav = ({
  close,
  isOpen = false,
}: {
  close?: any;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`fixed h-full w-full bg-dark transition-all duration-500 ease-in-out ${
        isOpen ? "-left-0" : "-left-[100vw]"
      }`}
      style={{
        zIndex: 1000,
      }}
    >
      <nav className="relative mx-auto flex h-[80vh] w-11/12 items-center justify-between md:w-4/5">
        <div className="flex h-full w-full flex-col items-center justify-center">
          <NavLink
            to="/public/company"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/public/services"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/public/contact"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            Contact
          </NavLink>
        </div>
        <div
          className="absolute right-[30px] top-[30px]"
          onClick={() => close()}
        >
          <img
            src="https://onedrive.live.com/embed?resid=B8295C03D418D49B%21839&authkey=%21AIbKrdzHi9nMiL8&width=485&height=487"
            alt="close"
            loading="lazy"
            className="h-[38px] w-[38px] rounded-full bg-white"
          />
        </div>
      </nav>
      <div>
        <p className="text-center font-ui-sans text-xs uppercase text-gray-500">
          &copy; {new Date().getFullYear()} Zoges Agro and Allied. <br /> All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Sidenav;
