import { Link, NavLink } from 'react-router-dom';
import {
  activeFooterLinks,
  footerLinks,
  location,
  logo,
  mail,
  phone,
} from 'core/const/styling';
import { zogesInfo } from 'core/const/zoges';

const Footer = () => {
  return (
    <footer className="border-t border-t-1 border-t-darkgreen">
      <div className="w-11/12 md:w-4/5 mx-auto font-sohne">
        <div className="flex flex-col md:flex-row py-8 gap-5">
          <div className="w-full md:w-1/3">
            <Link to="/public/home" className="w-[60px]">
              <img src={logo} alt="zoges agro" className="w-[24px] h-[24px]" />
            </Link>
            <p className="mt-2">{zogesInfo?.summary}</p>
          </div>

          <div className="w-full md:w-2/3 flex justify-center">
            <div className="w-1/2 md:w-1/3">
              <h3 className="text-gray-500 font-black mb-3">Explore</h3>
              <nav className="flex flex-col gap-3">
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
              </nav>
            </div>
            <div className="w-1/2 md:w-1/3">
              <h3 className="font-black text-gray-500 mb-3">Contact</h3>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2 items-center">
                  <img
                    src={phone}
                    alt="telephone"
                    className="w-[24px] h-[24px]"
                  />
                  <a href={`tel:${zogesInfo?.contact?.phone}`}>
                    {zogesInfo?.contact?.phone}
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <img src={mail} alt="mail" className="w-[24px] h-[24px]" />
                  <a href={`mailto:${zogesInfo?.contact?.email}`}>
                    {zogesInfo?.contact?.email}
                  </a>
                </div>
                <div className="flex gap-2 items-center">
                  <img
                    src={location}
                    alt="location"
                    className="w-[24px] h-[24px]"
                  />
                  <p>{zogesInfo?.contact?.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="border-t border-t-2 border-t-darkgreen py-5 text-xs text-center font-ui-sans">
          &copy; {new Date().getFullYear()} Zoges Agro and Allied. All Rights
          Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
