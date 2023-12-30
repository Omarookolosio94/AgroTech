import { btn } from "core/const/styling";
import { zogesInfo } from "core/const/zoges";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto mb-8 w-11/12 md:w-4/5">
      <section className="mb-[35px] flex flex-col-reverse gap-3 md:flex-row">
        <div className="flex h-[60vh] w-full flex-col justify-center py-[16px] md:h-[80vh] md:w-1/2">
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Move Your Farm Products <br />
            and Livestocks with Ease
          </h3>
          <p className="mb-8 text-dark">
            We cultivate crops, rear animals, and transport farm produce to the
            market or final consumer anywhere in the country. We are committed
            to providing our customers with high-quality products and services
            at competitive prices.
          </p>

          <div className="mb-5 flex justify-center gap-5 md:justify-start">
            <Link
              to="/public/services"
              className={`${btn} w-full bg-darkgreen text-white md:w-[150px]`}
            >
              Our Services
            </Link>
            <Link
              to="/public/company"
              className={`${btn} w-full border border-2 border-darkgreen md:w-[150px]`}
            >
              <img src={""} alt="" className="h-[24px] w-[24px]" />
            </Link>
          </div>
          <div className="flex justify-center gap-5 md:justify-start">
            <div className="w-full rounded-md bg-naturegreen p-[10px] md:w-[150px]">
              <span className="text-[24px] font-black text-gray-500">500k</span>{" "}
              <br />
              <span>Farm produce delivered</span>
            </div>
            <div className="w-full rounded-md bg-naturegreen p-[10px] md:w-[150px]">
              <span className="text-[24px] font-black text-gray-500">
                5000+
              </span>{" "}
              <br />
              <span>Farmers served</span>
            </div>
          </div>
        </div>
        <div className="flex h-[30vh] w-full flex-col items-center justify-center gap-5 rounded-md md:h-[80vh] md:w-1/2">
          <div className="h-full w-full overflow-hidden rounded-md border bg-lightdark md:h-3/5">
            <img
              src=""
              alt="vegetables"
              className="h-[50vh] w-full overflow-hidden lg:h-auto"
            />
          </div>
          <div className="hidden h-2/5 w-full gap-5 overflow-hidden md:flex">
            <img
              src=""
              alt="tractor"
              className="w-1/2 overflow-hidden rounded-md bg-lightdark"
            />
            <img
              src=""
              alt="harvester"
              className="w-1/2 overflow-hidden rounded-md bg-lightdark"
            />
          </div>
        </div>
      </section>
      <section className="mb-[80px]">
        <h3 className="mb-5 font-sohne text-[24px] font-semibold">
          Our Services
        </h3>
        <p className="mb-8 text-dark">
          We are committed to providing our customers with high-quality products
          and services at competitive prices.
        </p>

        <div className="flex flex-col justify-center gap-5 py-3 md:flex-row">
          {zogesInfo?.services?.map((service, index) => (
            <div
              key={index + 1}
              className="w-full rounded-md border border-2 border-naturegreen p-[20px] transition duration-300 ease-in-out hover:-translate-y-[8px] md:w-[200px]"
            >
              <img src="" alt="logistics" className="w-[60px] bg-naturegreen" />
              <h5 className="my-2 font-bold">{service?.name}</h5>
              <p>{service?.summary}</p>
            </div>
          ))}
        </div>

        <div className="mt-3 flex justify-center">
          <Link
            to="/public/services"
            className={`${btn} w-[150px] bg-darkgreen text-white`}
          >
            All Services
          </Link>
        </div>
      </section>
      <section className="mb-[80px] flex flex-col items-center gap-5 md:flex-row">
        <div className="mb-5 flex w-full justify-center gap-5 md:w-1/2">
          <img
            src=""
            alt=""
            className="z-10 h-[300px] w-auto rounded-md bg-lightdark"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Why Choose Zoges Agro & Trucking Ventures?
          </h3>
          <p className="text-dark">{zogesInfo?.pitch?.summary}</p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {zogesInfo?.pitch?.points?.map((point, index) => (
              <div key={index} className="flex items-center gap-1">
                <p className="rounded-md bg-naturegreen p-1 text-[10px] font-bold text-gray-500">
                  {point?.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-cta mb-[80px] flex h-[40vh] flex-row items-center justify-center rounded-md bg-darkgreen">
        <div className="text-center">
          <h3 className="text-ui-sans mb-5 text-[24px] text-white">
            <span>Get in touch</span>
          </h3>
          <a
            href={`mailto:${zogesInfo?.contact?.email}`}
            className={`border-1 text-normal flex w-[150px] items-center justify-center gap-2 rounded-md border-2 border-white bg-darkgreen bg-naturegreen px-[24px] py-[16px] transition duration-300 ease-in-out hover:scale-105`}
          >
            <span>Send Message</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
