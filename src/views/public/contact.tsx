import { zogesInfo } from "core/const/zoges";

const Contact = () => {
  return (
    <div className="mx-auto mb-8 w-11/12 md:w-4/5">
      <section className="relative mb-[50px] h-[30vh] overflow-hidden rounded-md">
        <img
          src={''}
          alt="watering plant"
          className="w-full md:mt-[-20vh] lg:mt-[-30vh]"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center bg-dark bg-opacity-60">
          <div className="mb-3 p-5 text-center">
            <h5 className="text-[24px] font-semibold text-white">Contact</h5>
            <p className="text-white">
              We are always available to attend to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="relative mb-[50px] h-[30vh] overflow-hidden rounded-md">
        <img
          src={""}
          alt="machines"
          className="h-full w-full sm:h-auto md:mt-[-20vh] lg:mt-[-30vh]"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center  bg-dark bg-opacity-60">
          <div className="mb-3 p-5 text-center">
            <p className="font-[16px] text-white">Give us a call on</p>
            <a
              href={`tel:${zogesInfo?.contact?.phone}`}
              className={`border-1 text-normal mt-5 flex items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-[24px] py-[16px] transition duration-300 ease-in-out hover:scale-105`}
            >
              <img src={""} alt="" className="h-[24px] w-[24px]" />
              <span className="text-[12px]">{zogesInfo.contact?.phone}</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative mb-[50px] h-[30vh] overflow-hidden rounded-md">
        <img
          src={""}
          alt="vegetables"
          className="h-full w-full sm:h-auto md:mt-[-20vh] lg:mt-[-30vh]"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center  bg-dark bg-opacity-60">
          <div className="mb-3 p-5 text-center">
            <p className="mb-3 text-white">Send us an email</p>
            <a
              href={`mailto:${zogesInfo?.contact?.email}`}
              className={`border-1 text-normal flex  items-center justify-center gap-2 rounded-md border-2 border-white bg-white px-[24px] py-[16px] transition duration-300 ease-in-out hover:scale-105`}
            >
              <img src={""} alt="" className="h-[24px] w-[24px]" />
              <span className="text-[12px]">Send Message</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
