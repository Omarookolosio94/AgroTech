import { zogesInfo } from "core/const/zoges";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Zoges Agro & Trucking Ventures - Contact</title>
        <meta
          name="description"
          content="We are always available to attend to your need. Reach us today via mail on info@zogesagrotrucking.com. Visit us at AS 20 Benin Street Kaduna"
        />
        <meta name="robots" content="index, follow"></meta>
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <section className="bg-contact h-[35vh]">
        <div className="h-full w-full bg-black bg-opacity-[.5]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center pt-[80px] text-white md:w-4/5">
            <h1 className="mb-[16px] text-center text-[48px] font-[500] leading-none">
              Contact Us
            </h1>
            <p>We are always available to attend to your need</p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="h-full w-full py-[24px]">
          <div className="mx-auto flex w-11/12 flex-col items-center justify-between gap-5 overflow-hidden py-[16px] text-center md:w-4/5 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="mb-[16px]">
                <p>Address</p>
                <p className="text-[24px] font-[500]">
                  {zogesInfo?.contact?.address}
                </p>
              </div>
              <div className="mb-[16px]">
                <p>Email</p>
                <a
                  href={`mailto:${zogesInfo?.contact?.email}`}
                  className="text-[24px] font-[500]"
                >
                  {zogesInfo?.contact?.email}
                </a>
              </div>
              <div className="mb-[16px]">
                <p>Telephone</p>
                <a
                  href={`tel:${zogesInfo?.contact?.phone}`}
                  className="text-[24px] font-[500]"
                >
                  {zogesInfo?.contact?.phone}
                </a>
              </div>
            </div>
            <div className="h-[500px] w-full lg:w-1/2">
              <iframe
                title="zogesagrotruckinggeolocation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31383.26497283994!2d7.4186407078624725!3d10.507902632396092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355834371775%3A0x480195979abfe174!2sKaduna%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1703958630816!5m2!1sen!2sng"
                style={{ border: "0" }}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
