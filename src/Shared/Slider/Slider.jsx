// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"; // Import pagination styles
import person from '../../assets/Ellipse 10.png';
import "../../Style/CustomTabs.css";
import { Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div>
      <Swiper 
        modules={[Pagination]} 
        pagination={{ clickable: true }}  // Enable clickable pagination dots
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[60%] text-center flex items-center gap-4">
              <img
                src={person}
                alt="Person 1"
                className="rounded-full mx-auto"
              />
              <div className="text-left">
                <p className="text-gray-600 mb-4 font-semibold">
                  <span className="text-primary text-2xl">"</span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim malesuada.
                  <span className="text-primary text-2xl">"</span>
                </p>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[60%] text-center flex items-center gap-4">
              <img
                src={person}
                alt="Person 1"
                className="rounded-full mx-auto"
              />
              <div className="text-left">
                <p className="text-gray-600 mb-4 font-semibold">
                  <span className="text-primary text-2xl">"</span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim malesuada.
                  <span className="text-primary text-2xl">"</span>
                </p>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6 w-[60%] text-center flex items-center gap-4">
              <img
                src={person}
                alt="Person 1"
                className="rounded-full mx-auto"
              />
              <div className="text-left">
                <p className="text-gray-700 mb-4">
                  <span className="text-primary text-2xl">"</span>
                  Lorem ipsum dolor sit amet consectetur. In enim cursus odio
                  accumsan. Id leo urna velit neque mattis id tellus arcu
                  condimentum. Augue dictum dolor elementum convallis dignissim malesuada.
                  <span className="text-primary text-2xl">"</span>
                </p>
                <h3 className="font-bold">John Doe</h3>
                <p className="text-gray-500">CEO</p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>

      {/* Pagination dots will be automatically handled by Swiper */}
    </div>
  );
};

export default Slider;
