import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LOGO from 'assets/images/zoges1.png';
import {
  activelinks,
  btn,
  documentGif,
  farmer,
  links,
  navbtn,
  questions,
  quotes,
  truck,
} from 'core/const/styling';

const Navbar = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 border border-b-darkwhite"
      style={{
        background: 'rgb(254, 254, 254)',
        zIndex: 9999,
      }}
    >
      <nav className="flex justify-between items-center my-1 py-2 w-11/12 md:w-4/5 mx-auto">
        <Link to="/public/home">
          <img src={LOGO} alt="zoges agro" className="w-[60px] h-[60px]" />
        </Link>
        <div className="flex justify-between gap-8">
          <NavLink
            to="/public/home"
            className={({ isActive }) => (isActive ? activelinks : links)}
          >
            <div className="flex items-center gap-2">
              <span>Home</span>
              <img src={farmer} alt="" className="w-[24px] h-[24px]" />
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
          <NavLink
            to="/public/stories"
            className={({ isActive }) => (isActive ? activelinks : links)}
          >
            <div className="flex items-center gap-2">
              <span>Stories</span>
              <img src={quotes} alt="" className="w-[24px] h-[24px]" />
            </div>
          </NavLink>
        </div>
        <div>
          <Link to="/public/contact" className={`${navbtn}`}>
            <span>Contact Us</span>
            <img src={questions} alt="" className="w-[24px] h-[24px]" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
