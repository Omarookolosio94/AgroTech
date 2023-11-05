import { footer_links } from 'core/const/styling';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-darkgreen">
      <footer className="w-11/12 md:w-4/5 mx-auto flex justify-between py-8 text-white font-ui-sans">
        <p className="text-xs uppercase">
          &copy; {new Date().getFullYear()} Zoges Agro and Allied. All Rights
          Reserved
        </p>

        <nav className="flex gap-3">
          <NavLink
            to="/public/home"
            className={({ isActive }) =>
              isActive ? `${footer_links} font-bold` : footer_links
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/public/services"
            className={({ isActive }) =>
              isActive ? `${footer_links} font-bold` : footer_links
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/public/company"
            className={({ isActive }) =>
              isActive ? `${footer_links} font-bold` : footer_links
            }
          >
            Company
          </NavLink>
          <NavLink
            to="/public/stories"
            className={({ isActive }) =>
              isActive ? `${footer_links} font-bold` : footer_links
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
