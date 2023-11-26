import {
  avocado,
  chicken,
  sugarcane,
  tractor,
  tractorFarm,
  van,
  warehouse,
} from "core/const/styling";
import { zogesInfo } from "core/const/zoges";

const Services = () => {
  const farmEquipments = [
    "Tractors",
    "Harvesters",
    "Planters",
    "Sprayers",
    "Combines",
    "And more!",
  ];

  const animals = ["cows", "sheep", "goats", "fish", "poultry", "pigs"];

  const crops = [
    "maize",
    "rice",
    "sugarcane",
    "sorghum",
    "soybeans",
    "cowpeas",
    "avocado",
  ];

  return (
    <div className="mx-auto mb-8 w-11/12 md:w-4/5">
      <section className="relative mb-[50px] h-[30vh] overflow-hidden rounded-md">
        <img
          src={tractor}
          alt="tractor in farmland"
          className="w-full md:mt-[-20vh] lg:mt-[-30vh]"
        />
        <div className="absolute top-0 flex h-full w-full items-center justify-center bg-dark bg-opacity-60">
          <div className="mb-3 p-5 text-center">
            <h5 className="text-[24px] font-semibold text-white">Services</h5>
            <p className="text-white">
              We are committed to providing our customers with high-quality
              products and services at competitive prices
            </p>
          </div>
        </div>
      </section>
      <section className="mb-[80px] grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="w-full rounded-md border border-2 border-naturegreen px-5 py-10">
          <img src={tractorFarm} alt="treactor" className="w-[60px]" />
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Farm Equipments Rental
          </h3>
          <p className="text-dark">
            Our equipment is well-maintained and in excellent condition. We also
            offer a variety of rental terms to fit your needs, from short-term
            rentals to long-term leases. We offer a wide range of farm equipment
            for rent, including:
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {farmEquipments?.map((equip, index) => (
              <div key={index} className="flex items-center gap-1">
                <p className="rounded-md bg-naturegreen p-1 text-[10px] font-bold text-gray-500">
                  {equip}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full rounded-md border border-2 border-naturegreen px-5 py-10">
          <img src={van} alt="logistics" className="w-[60px] bg-naturegreen" />
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Logistics
          </h3>
          <p className="text-dark">
            We provide logistics services for moving farm produce to the
            marketplace. We have a team of experienced drivers and a fleet of
            trucks that can handle any size shipment. We can also help you with
            customs clearance and other documentation requirements.
          </p>
        </div>
        <div className="w-full rounded-md border border-2 border-naturegreen px-5 py-10">
          <img
            src={warehouse}
            alt="warehouse"
            className="w-[60px] bg-naturegreen"
          />
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Warehousing As A Service
          </h3>
          <p className="text-dark">
            We provide WaaS to farmers and businesses, offering secure and
            flexible storage solutions for their inventory. Our WaaS features
            include:
          </p>
          <ul className="mt-5">
            <li className="mb-3">
              <span className="mr-2 rounded-md bg-naturegreen px-1 py-1 text-[10px] font-bold text-gray-500">
                Climate-controlled storage
              </span>
              to protect your inventory from the elements
            </li>
            <li className="mb-3">
              <span className="mr-2 rounded-md bg-naturegreen px-1 py-1 text-[10px] font-bold text-gray-500">
                24/7 security
              </span>
              to ensure the safety of your goods Inventory tracking and
            </li>
            <li className="mb-3">
              management software
              <span className="mx-2 rounded-md bg-naturegreen px-1 py-1 text-[10px] font-bold text-gray-500">
                Flexible storage options
              </span>
              to meet your needs
            </li>
          </ul>
        </div>
        <div className="w-full rounded-md border border-2 border-naturegreen px-5 py-10">
          <img src={chicken} alt="chicken" className="w-[60px]" />
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Animal Rearing
          </h3>
          <p className="text-dark">
            We provide our animals with the best possible care and nutrition to
            ensure that they produce high-quality products. We rear a variety of
            animals, including:
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {animals?.map((animal, index) => (
              <div key={index} className="flex items-center gap-1">
                <p className="rounded-md bg-naturegreen p-1 text-[10px] font-bold text-gray-500">
                  {animal}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full rounded-md border border-2 border-naturegreen px-5 py-10">
          <img
            src={sugarcane}
            alt="sugarcane"
            className="w-[60px] bg-naturegreen"
          />
          <h3 className="mb-5 font-sohne text-[24px] font-semibold">
            Crop Cultivation
          </h3>
          <p className="text-dark">
            We use sustainable farming practices to protect the environment and
            produce high-quality crops. We cultivate a variety of crops,
            including:
          </p>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {crops?.map((crop, index) => (
              <div key={index} className="flex items-center gap-1">
                <p className="rounded-md bg-naturegreen p-1 text-[10px] font-bold text-gray-500">
                  {crop}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-cta mb-[80px] flex h-[40vh] flex-row items-center justify-center rounded-md bg-darkgreen">
        <div className="text-center">
          <h3 className="text-ui-sans mb-5 text-[24px] text-white">
            <span>Get A Quote</span>
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

export default Services;
