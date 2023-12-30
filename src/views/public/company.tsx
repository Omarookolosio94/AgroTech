const Company = () => {
  return (
    <>
      <section className="bg-about h-[35vh]">
        <div className="h-full w-full bg-black bg-opacity-[.5]">
          <div className="mx-auto flex h-full w-11/12 flex-col items-center justify-center pt-[80px] text-white md:w-4/5">
            <h1 className="mb-[16px] text-center text-[48px] font-[500] leading-none">
              About Us
            </h1>
            <p>A Tapestry of Agriculture and Tradition</p>
          </div>
        </div>
      </section>
      <section className="bg-mission text-white">
        <div className="h-full w-full bg-black bg-opacity-[.5] py-[24px]">
          <div className="mx-auto flex w-11/12 flex-col items-center justify-center py-[16px] text-center md:w-4/5 lg:h-[80vh]">
            <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
              Mission Statement
            </h3>

            <div className="mb-[32px] flex flex-col justify-center gap-5 lg:flex-row">
              <div className="w-full bg-white   bg-opacity-[.8] px-[20px] py-[40px] text-black  backdrop-blur-sm backdrop-filter lg:h-[330px] lg:w-1/3">
                <p>
                  {" "}
                  “At Zoges Agro & Trucking Ventures, our mission is to
                  cultivate and nurture the land with unwavering dedication to
                  sustainable and ethical farming practices. We are committed to
                  providing our community with premium, farm-fresh produce and
                  animal products, fostering a connection between nature and the
                  dining table. Through responsible stewardship, we strive to
                  contribute to a healthier and more sustainable future for
                  all.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto my-[32px] w-11/12 py-[32px] md:w-4/5 lg:w-3/5">
        <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
          Our Story
        </h3>
        <p className="mb-[24px] w-full">
          Founded with a passion for farming, Zoges farms embarked on a journey
          to create a haven of agricultural excellence. What started as a humble
          plot has blossomed into a thriving farm that combines traditional
          farming practices with cutting-edge technology.
        </p>

        <h5 className="mb-[16px] font-[500]">
          Our Cultivation Practices: From Field to Table
        </h5>
        <p className="mb-[24px]">
          Explore our lush fields where a variety of crops are nurtured under
          the watchful eye of seasoned farmers. We prioritize organic and
          sustainable farming practices to ensure that each harvest is rich in
          flavor, nutrition, and goodness. From plowing the fields to
          harvesting, we take pride in every step of the process.
        </p>

        <h5 className="mb-[16px] font-[500]">
          Animal Welfare: Happy Animals, Healthy Products{" "}
        </h5>
        <p className="mb-[24px]">
          Our commitment to ethical farming extends to our animals. Discover the
          pastures where our animals roam freely, enjoying a life that aligns
          with their natural instincts. The result? High-quality meat and dairy
          products that not only taste superior but also reflect our dedication
          to animal welfare.
        </p>

        <h5 className="mb-[16px] font-[500]">
          Trucking Division: From Farm to Market{" "}
        </h5>
        <p className="mb-[24px]">
          To bridge the gap between our farm and your table, we operate a
          state-of-the-art trucking division. Our fleet ensures that our produce
          reaches wholesalers and markets promptly, maintaining the freshness
          and quality you expect from Zoges Farms
        </p>
      </section>

      <section className="bg-vision text-white">
        <div className="h-full w-full bg-black bg-opacity-[.5] py-[24px]">
          <div className="mx-auto flex w-11/12 flex-col items-center justify-center py-[16px] text-center md:w-4/5 lg:h-[80vh]">
            <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
              Vision Statement
            </h3>

            <div className="mb-[32px] flex flex-col justify-center gap-5 lg:flex-row">
              <div className="w-full bg-white   bg-opacity-[.8] px-[20px] py-[40px] text-black  backdrop-blur-sm backdrop-filter lg:h-[330px] lg:w-1/3">
                <p>
                  {" "}
                  “Empowering lives through agriculture, Zoges Agro & Trucking
                  Ventures envisions a world where the bounty of the land is
                  celebrated and shared responsibly. We aspire to be a beacon of
                  excellence in farming, creating a harmonious ecosystem where
                  crops flourish, animals thrive, and communities prosper. Our
                  vision is to be a trusted provider of wholesome, quality
                  products that reflect the essence of ethical and sustainable
                  agriculture.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto my-[32px] w-11/12 py-[32px] md:w-4/5 lg:w-3/5">
        <h3 className="mb-[32px] text-center text-[32px] font-[500] leading-none">
          Corporate Values
        </h3>

        <h5 className="mb-[6px] font-[500]">Sustainability</h5>
        <p className="mb-[24px]">
          We are committed to sustainable farming practices that preserve and
          enhance the environment for future generations.
        </p>

        <h5 className="mb-[6px] font-[500]">Integrity</h5>
        <p className="mb-[24px]">
          We uphold the highest standards of integrity in all our interactions,
          ensuring transparency and honesty in our farming and business
          operations.
        </p>

        <h5 className="mb-[6px] font-[500]">Quality</h5>
        <p className="mb-[24px]">
          We relentlessly pursue excellence in every aspect of our farm, from
          cultivation to transportation, to deliver products of the highest
          quality to our customers.
        </p>

        <h5 className="mb-[6px] font-[500]">Community Engagement</h5>
        <p className="mb-[24px]">
          We actively engage with and support our local community, fostering
          partnerships and initiatives that contribute to the well-being of the
          areas in which we operate.
        </p>

        <h5 className="mb-[6px] font-[500]">Ethical Animal Husbandry</h5>
        <p className="mb-[24px]">
          We prioritize the well-being of our animals, providing them with
          humane living conditions and adhering to ethical practices in animal
          husbandry.
        </p>
      </section>
    </>
  );
};

export default Company;
