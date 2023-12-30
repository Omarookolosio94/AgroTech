import { zogesInfo } from "core/const/zoges";

const Services = () => {
  return (
    <>
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
          <section
            key={index}
            className="mx-auto my-[32px] w-11/12 py-[32px] md:w-4/5 lg:w-3/5"
          >
            <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
              {service?.name}
            </h3>

            {service?.subservice?.map((sub: any, subindex: number) => (
              <>
                <h5 className="mb-[16px] font-[500]">{sub?.name}</h5>
                <p className="mb-[24px]">{sub?.detail}</p>
              </>
            ))}
          </section>
        </>
      ))}
    </>
  );
};

export default Services;
