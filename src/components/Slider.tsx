"use client";
import Image from "next/image";
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
          <Image src="/images/peproni pizza.jpg" alt="Delicious Pizza" width={150} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Delicious Pizzas</h3>
        </div>
        {/* Slide 2 */}
        <div>
          <Image src="/images/chicken burger.jpg" alt="Tasty Burger" width={160} height={300}  className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Tasty Burger</h3>
        </div>
        {/* Slide 3 */}
        <div>
          <Image src="/images/vegetable-salad.jpg" alt="Fresh Salad" width={150} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Fresh Salad</h3>
        </div>
        {/* Slide 4 */}
        <div>
          <Image src="/images/biryani.jpeg" alt="Yummy Biryani" width={170} height={300}  className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Yummy Biryani</h3>
        </div>
        {/* Slide 5 */}
        <div>
          <Image src="/images/makhani handi.jpeg" alt="Makhni Handi" width={170} height={300}  className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Makhni Handi</h3>
        </div>
        {/* Slide 6 */}
        <div>
          <Image src="/images/fish.jpeg" alt="Grilled Fish" width={150} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Grilled Fish</h3>
        </div>
        {/* Slide 7 */}
        <div>
          <Image src="/images/mutton qorma.jpeg" alt="mutton qorma" width={180} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Mutton Qorma</h3>
        </div>
        {/* Slide 8 */}
        <div>
          <Image src="/images/chicken kabab.avif" alt="chicken kabab" width={120} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">BBQ Chicken</h3>
        </div>
        {/* Slide 8 */}
        <div>
          <Image src="/images/special platter.jpg" alt=" Platter" width={150} height={300} className="w-full h-[300px] object-cover" />
          <h3 className="text-center text-lg font-semibold mt-2 font-serif">Special Platter</h3>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
