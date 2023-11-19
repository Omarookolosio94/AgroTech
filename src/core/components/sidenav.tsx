import { activeSidenavLink, closeIcon, sidenavLink } from 'core/const/styling';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidenav = ({
  close,
  isOpen = false,
}: {
  close?: any;
  isOpen: boolean;
}) => {
  return (
    <div
      className={`fixed transition-all duration-500 ease-in-out bg-dark w-full h-full ${
        isOpen ? '-left-0' : '-left-[100vw]'
      }`}
      style={{
        zIndex: 1000,
      }}
    >
      <nav className="relative flex justify-between items-center w-11/12 h-[80vh] md:w-4/5 mx-auto">
        <div className="flex justify-center items-center flex-col w-full h-full">
          <NavLink
            to="/public/home"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            Home
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
            to="/public/company"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/public/stories"
            onClick={() => close()}
            className={({ isActive }) =>
              isActive ? activeSidenavLink : sidenavLink
            }
          >
            Stories
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
          className="absolute top-[30px] right-[30px]"
          onClick={() => close()}
        >
          <img src={closeIcon} alt="close" className="w-[32px] h-[32px]" />
        </div>
      </nav>
      <div>
        <p className="text-xs text-center text-gray-500 font-ui-sans uppercase">
          &copy; {new Date().getFullYear()} Zoges Agro and Allied. <br /> All
          Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Sidenav;
