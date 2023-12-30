const Contact = () => {
  return (
    <>
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
      <section className="bg-white text-white">
        <div className="h-full w-full py-[24px]">
          <div className="mx-auto flex w-11/12 overflow-hidden flex-col items-center justify-center py-[16px] text-center md:w-4/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31383.26497283994!2d7.4186407078624725!3d10.507902632396092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104d355834371775%3A0x480195979abfe174!2sKaduna%20800283%2C%20Kaduna!5e0!3m2!1sen!2sng!4v1703958630816!5m2!1sen!2sng"
              width="600"
              height="450"
              style={{ border: "0" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
