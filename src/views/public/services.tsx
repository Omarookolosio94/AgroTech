import { zogesInfo } from "core/const/zoges";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Zoges Agro & Trucking Ventures - Services</title>
        <meta
          name="description"
          content="At Zoges Agro and Trucking ventures we offer the following services: Cultivation Services, Animal Rearing Services and  Trucking and Warehouse Services "
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <section className="bg-service h-[35vh]">
        <div className="h-full w-full bg-black bg-opacity-[.5]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center pt-[80px] text-white md:w-4/5">
            <h1 className="mb-[16px] text-center text-[48px] font-[500] leading-none">
              Our Services
            </h1>
          </div>
        </div>
      </section>
      {zogesInfo?.mainservice?.map((service: any, index: number) => (
        <>
          <section key={index} className="mx-auto my-[32px] w-11/12 py-[32px]">
            <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
              {service?.name}
            </h3>
            <div
              className={`flex flex-col items-center justify-between gap-5 ${
                (index + 10) % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/2">
                {service?.subservice?.map((sub: any, subindex: number) => (
                  <>
                    <h5 className="mb-[16px] font-[500]">{sub?.name}</h5>
                    <p className="mb-[24px]">{sub?.detail}</p>
                  </>
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <img src={service?.photos} alt="" className="h-full w-full" />
              </div>
            </div>
          </section>
        </>
      ))}
    </>
  );
};

export default Services;
