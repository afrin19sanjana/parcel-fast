import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

import brand1 from '../assets/brands/amazon_vector.png';
import brand2 from '../assets/brands/amazon.png';
import brand3 from '../assets/brands/casio.png';
import brand4 from '../assets/brands/moonstar.png';
import brand5 from '../assets/brands/randstad.png';
import brand6 from '../assets/brands/start-people 1.png';
import brand7 from '../assets/brands/start.png';

const brandLogos = [
  { src: brand1, alt: 'Amazon Vector' },
  { src: brand2, alt: 'Amazon' },
  { src: brand3, alt: 'Casio' },
  { src: brand4, alt: 'Moonstar' },
  { src: brand5, alt: 'Randstad' },
  { src: brand6, alt: 'Start People' },
  { src: brand7, alt: 'Start' },
];

const Brands = () => {
  return (
    <div className="py-12  text-center container mx-auto">
      <h2 className="text-2xl font-bold mb-8">
        We've helped thousands of sales teams
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={100}
        slidesPerView={4}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={3000}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
      >
        {brandLogos.map((brand, index) => (
          <SwiperSlide key={index}>
            <img
              src={brand.src}
              alt={brand.alt}
              className="h-24 mx-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Brands;
