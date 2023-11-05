import { NavLink } from 'react-router-dom';
import { activeFooterLinks, footerLinks } from 'core/const/styling';

const Footer = () => {
  return (
    <div className="border bg-darkgreen border-t-1">
      <footer className="w-11/12 md:w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-6 text-white font-ui-sans gap-4">
        <p className="text-xs uppercase text-center">
          &copy; {new Date().getFullYear()} Zoges Agro and Allied. <br /> All
          Rights Reserved
        </p>

        <nav className="flex gap-2">
          <NavLink
            to="/public/home"
            className={({ isActive }) =>
              !isActive ? footerLinks : activeFooterLinks
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/public/services"
            className={({ isActive }) =>
              !isActive ? footerLinks : activeFooterLinks
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/public/company"
            className={({ isActive }) =>
              !isActive ? footerLinks : activeFooterLinks
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/public/stories"
            className={({ isActive }) =>
              !isActive ? footerLinks : activeFooterLinks
            }
          >
            Stories
          </NavLink>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
