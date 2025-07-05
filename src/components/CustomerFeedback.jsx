import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import cart from '../assets/images/customer-top.png'
const testimonials = [
  {
    name: "Rasel Ahmed",
    role: "CTO",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Awlad Hossain",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Nasir Uddin",
    role: "Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
    image: "https://i.pravatar.cc/100?img=3",
  },
    {
    name: "Nasir Uddin",
    role: "Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine.",
    image: "https://i.pravatar.cc/100?img=3",
  },
   {
    name: "Awlad Hossain",
    role: "Senior Product Designer",
    message:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
    image: "https://i.pravatar.cc/100?img=2",
  },
];

const CustomerFeedback = () => {
  return (
    <div className="container  py-16 px-4 text-center mx-auto">
      <div className="mb-8">
        <div className="flex justify-center">
            <img className="my-9" src={cart} alt="" />
        </div>
        <h2 className="text-4xl font-bold text-gray-800">
          What our customers are sayings
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto pb-10">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease.
        </p>
      </div>

      <Swiper
        slidesPerView={1.4}
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false,  stopOnLastSlide: false, }}
        modules={[Pagination, Autoplay]}
        breakpoints={{
          768: { slidesPerView: 1.7 },
          1024: { slidesPerView: 2.5 },
        }}
        className="!pb-12 group"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="!flex justify-center">
            {({ isActive }) => (
              <div
                className={`transition-all duration-300 p-6 max-w-sm w-full rounded-xl shadow-md bg-white ${
                  isActive ? "scale-105 opacity-100 z-10" : "scale-95 opacity-50"
                }`}
              >
                <FaQuoteLeft className="text-3xl text-blue-400 mb-4" />
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  {testimonial.message}
                </p>
                <div className="flex items-center gap-3 justify-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-800 text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Styling */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background-color: #22c55e;
        }
      `}</style>
    </div>
  );
};

export default CustomerFeedback;
