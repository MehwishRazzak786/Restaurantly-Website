"use client";

import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // 3 images at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024, // For tablets and smaller desktops
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // For mobile devices
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ImageSlider = () => {
  return (
    <div className="w-full mt-12 mb-12 px-7">
      <Slider {...sliderSettings}>
        {/* Slide 1 */}
        <div>
          <img src="/images/peproni pizza.jpg" alt="Delicious Pizza" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Delicious Pizzas</h3>
        </div>
        {/* Slide 2 */}
        <div>
          <img src="/images/chicken burger.jpg" alt="Tasty Burger" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Tasty Burger</h3>
        </div>
        {/* Slide 3 */}
        <div>
          <img src="/images/vegetable-salad.jpg" alt="Fresh Salad" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Fresh Salad</h3>
        </div>
        {/* Slide 4 */}
        <div>
          <img src="/images/biryani.jpeg" alt="Yummy Biryani" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Yummy Biryani</h3>
        </div>
        {/* Slide 5 */}
        <div>
          <img src="/images/makhani handi.jpeg" alt="Makhni Handi" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Makhni Handi</h3>
        </div>
        {/* Slide 6 */}
        <div>
          <img src="/images/fish.jpeg" alt="Grilled Fish" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Grilled Fish</h3>
        </div>
        {/* Slide 7 */}
        <div>
          <img src="/images/mutton qorma.jpeg" alt="mutton qorma" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Mutton Qorma</h3>
        </div>
        {/* Slide 8 */}
        <div>
          <img src="/images/chicken kabab.avif" alt="chicken kabab" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">BBQ Chicken</h3>
        </div>
        {/* Slide 8 */}
        <div>
          <img src="/images/special platter.jpg" alt=" Platter" className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Special Platter</h3>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
