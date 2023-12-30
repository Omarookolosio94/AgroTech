import { logo } from "core/const/images";
import { zogesInfo } from "core/const/zoges";

const Footer = () => {
  return (
    <footer className="bg-darkgreen text-white">
      <div className="mx-auto w-11/12 items-center pt-[75px] md:w-4/5">
        <div className="mb-[34px] flex flex-col justify-center gap-[60px] md:flex-row md:gap-[40px] lg:gap-[60px]">
          <div className="w-full text-center md:w-2/4">
            <img
              src={logo}
              alt="zogesagrotrucking"
              loading="lazy"
              className="mx-auto mb-[32px] h-[60px] w-[60px]  border"
            />
            <p className="text-line text-[14px]">
              At Zoges Agro & Trucking, we take pride in cultivating nature’s
              bounty crops and raising farm animals with the utmost care to
              provide you with premium, farm-fresh produce. Nestled in the heart
              of Nigeria, our farm is a testament to a commitment to sustainable
              agriculture and ethical animal husbandry. .
            </p>
          </div>
        </div>
        {/*
      <div className="mb-[34px] flex items-center justify-center gap-5">
        <a href="http://twitter.com">
          <img
            src={twitter}
            className="h-[25x] w-[25px]"
            loading="lazy"
            alt="twitter"
          />
        </a>
        <a href="http://linkedin.com">
          <img
            src={linkedin}
            className="h-[25x] w-[25px]"
            loading="lazy"
            alt="linkedin"
          />
        </a>
        <a href="http://facebook.com">
          <img
            src={facebook}
            className="h-[25x] w-[25px]"
            loading="lazy"
            alt="facebook"
          />
        </a>
        <a href="http://instagram.com">
          <img
            src={instagram}
            className="h-[25x] w-[25px]"
            loading="lazy"
            alt="instagram"
          />
        </a>
  </div>*/}
        <div className="mb-[48px] text-center">
          <a href={`${zogesInfo?.contact?.email}`} className="text-[14px]">
            {zogesInfo?.contact?.email}
          </a>
        </div>
        <div className="border-t border-t-white">
          <div className="mx-auto flex items-center justify-center gap-3 py-[20px] text-[14px]">
            <p>
              {" "}
              &copy; {new Date().getFullYear()} Zoges Agro and Allied. All
              Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
