import {
  aboutImg,
  avocado,
  btn,
  links,
  play,
  truck2,
  van,
} from 'core/const/styling';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto mb-8">
      <section className="gap-3 flex flex-col-reverse md:flex-row mb-8">
        <div className="w-full md:w-1/2 p-[16px] flex flex-col justify-center h-[80vh]">
          <h3 className="font-semibold text-[24px] font-sohne mb-5">
            Move Your Farm Products <br />
            and Livestocks with Ease
          </h3>
          <p className="mb-8 text-dark">
            We cultivate crops, rear animals, and transport farm produce to the
            market or final consumer anywhere in the country. We are committed
            to providing our customers with high-quality products and services
            at competitive prices.
          </p>

          <div className="flex gap-5 mb-8">
            <Link
              to="/public/services"
              className={`${btn} w-[150px] bg-darkgreen text-white`}
            >
              Our Services
            </Link>
            <Link
              to="/public/company"
              className={`${btn} w-[150px] border border-darkgreen border-2`}
            >
              <img src={play} alt="" className="w-[24px] h-[24px]" />
              <span>Learn More</span>
            </Link>
          </div>
          <div className="flex gap-5">
            <div className="bg-naturegreen p-[10px] w-[150px] rounded-md">
              <span className="text-[24px] text-gray-500 font-black">500k</span>{' '}
              <br />
              <span>Farm produce delivered</span>
            </div>
            <div className="bg-naturegreen p-[10px] w-[150px] rounded-md">
              <span className="text-[24px] text-gray-500 font-black">
                5000+
              </span>{' '}
              <br />
              <span>Farmers served</span>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 rounded-md h-[50vh] md:h-[80vh] flex flex-col gap-5 justify-center items-center">
          <div className="bg-lightdark h-full md:h-3/5 w-full rounded-md">
            <img src="" alt="" />
          </div>
          <div className="hidden h-2/5 w-full md:flex gap-3">
            <img src="" alt="" className="w-1/2 bg-lightdark rounded-md" />
            <img src="" alt="" className="w-1/2 bg-lightdark rounded-md" />
          </div>
        </div>
      </section>
      <section className=''>
        <h2>Our Services</h2>
      </section>
    </div>
  );
};

export default Home;
