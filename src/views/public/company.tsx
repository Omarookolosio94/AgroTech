import { tractor2 } from "core/const/styling";
import { zogesInfo } from "core/const/zoges";

const Company = () => {
  const missionList = [
    {
      name: " Empower farmers",
      description:
        "We are dedicated to empowering farmers with the resources, knowledge, and technology they need to thrive and achieve sustainable agricultural success",
    },
    {
      name: "Cultivate innovation",
      description:
        "We embrace innovation as a driving force for progress, continuously seeking new and better ways to enhance agricultural practices, logistics solutions, and warehousing efficiency.",
    },
    {
      name: " Bridge farm to market",
      description:
        "We seamlessly connect farmers to the market, ensuring their produce reaches consumers efficiently, minimizing post-harvest losses, and maximizing profitability.",
    },
    {
      name: "Champion integrity",
      description:
        " We uphold the highest standards of integrity in all our dealings, fostering trust and transparency among our customers, partners, and employees.",
    },
  ];
  return (
    <div className="mx-auto w-11/12 md:w-4/5">
      <section className="relative mb-[30px] overflow-hidden">
        <h5 className="my-5 font-sohne text-[24px] font-semibold">Our Story</h5>
        <p className="w-full md:w-1/2 lg:w-1/3">{zogesInfo?.summary}</p>

        <div className="relative mt-[32px] h-[30vh] overflow-hidden rounded-md md:h-[50vh]">
          <img
            src={tractor2}
            alt="tractor in farmland"
            className="mt-[-15vh] w-full md:mt-[-40vh] lg:mt-[-70vh]"
          />
        </div>
      </section>

      <section className="mb-[24px] flex w-full">
        <div className="flex w-full flex-col justify-center gap-5 py-3 md:flex-row">
          <div>
            <div className="w-full">
              <p className="my-5 font-sohne text-[24px] font-semibold">
                Our Mission & Vision
              </p>
              <p className="w-full md:w-1/2 lg:w-1/3">
                To be the leading catalyst for agricultural prosperity and a
                sustainable food chain in Nigeria, empowering farmers, fostering
                innovation, and connecting farm to market with unwavering
                integrity.
              </p>
              <p className="w-full md:w-1/2 lg:w-1/3">
                To be the leading agriculture and logistics company in Nigeria.
                Here is a mission list statement
              </p>
            </div>
            <div className="mt-[34px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {missionList?.map((mission, index) => (
                <div
                  key={index}
                  className="mb-5 rounded-md border border-2 border-naturegreen px-3 pt-3 pb-5"
                >
                  <p className="mb-5 bg-naturegreen p-3 text-[10px] font-bold text-gray-500">
                    {mission?.name}
                  </p>
                  <p>{mission?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="quote-cta mb-[80px] flex h-[40vh] flex-row items-center justify-center rounded-md bg-darkgreen">
        <div className="text-center">
          <h3 className="text-ui-sans mb-5 text-[24px] text-white">
            <span>Contact Us</span>
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

export default Company;
