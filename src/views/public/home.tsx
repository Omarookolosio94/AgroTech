import { btn } from "core/const/styling";
import { zogesInfo } from "core/const/zoges";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-hero h-[95vh]">
        <div className="h-full w-full bg-black bg-opacity-[.1]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center pt-[80px] text-white md:w-4/5">
            <h1 className="mb-[16px] text-center text-[48px] font-[500] leading-none">
              Welcome to Zoges Agro & Trucking Ventures
            </h1>
            <p className="">Where Agriculture Meets Excellence</p>
          </div>
        </div>
      </section>
      <section className="mx-auto flex h-[80vh] w-11/12 flex-col items-center justify-center py-[16px] text-center md:w-4/5">
        <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
          Our Story
        </h3>
        <p className="mb-[32px] w-full md:w-2/3">
          Founded with a passion for farming, Zoges farms embarked on a journey
          to create a haven of agricultural excellence. What started as a humble
          plot has blossomed into a thriving farm that combines traditional
          farming practices with cutting-edge technology.
        </p>
        <Link
          to="/public/company"
          className="border-b-2 border-b-naturegreen px-4 py-2 font-[500]"
        >
          Read More
        </Link>
      </section>
      <section className="bg-carrot text-white">
        <div className="h-full w-full bg-black bg-opacity-[.5]">
          <div className="mx-auto flex w-11/12 flex-col items-center justify-center py-[16px] text-center md:w-4/5 lg:h-[90vh]">
            <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
              Services
            </h3>

            <div className="mb-[32px] flex flex-col justify-center gap-5 lg:flex-row">
              {zogesInfo?.services?.map((service, index) => (
                <div
                  key={index + 1}
                  className="w-full bg-white   bg-opacity-[.8] px-[20px] py-[40px] text-black  backdrop-blur-sm backdrop-filter lg:h-[330px] lg:w-1/3"
                >
                  <h5 className="mb-[16px] text-[18px] font-[500]">
                    {service?.name}
                  </h5>
                  <p>{service?.summary}</p>
                </div>
              ))}
            </div>

            <Link
              to="/public/services"
              className="border-b-2 border-b-naturegreen px-4 py-2 font-[500]"
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
      <section className="mx-auto flex w-11/12 flex-col items-center justify-center overflow-hidden py-[16px] text-center md:w-4/5">
        <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
          Gallery
        </h3>
        <div className="mb-[32px] flex items-center justify-between gap-5">
          <div className="h-full w-1/2 overflow-hidden border">
            <img
              src="https://onedrive.live.com/embed?resid=B8295C03D418D49B%21816&authkey=%21AB4m4oQwq_ev660&width=3692&height=2848"
              alt="vegetables"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="h-full w-1/2 border">
            <img
              src="https://onedrive.live.com/embed?resid=B8295C03D418D49B%21832&authkey=%21AObAWsRY-PTIWgQ&width=3692&height=2848"
              alt="harvester"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
