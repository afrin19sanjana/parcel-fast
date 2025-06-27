import React from 'react';
import { FaTruckPickup } from 'react-icons/fa';

const items = [
  {
    title: 'Booking Pick & Drop',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Cash On Delivery',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Delivery Hub',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
  {
    title: 'Booking SME & Corporate',
    desc: 'From personal packages to business shipments — we deliver on time, every time.',
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-[#edf1f3] py-12 px-4 urbanist">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl md:text-4xl font-extrabold  text-gray-800 mb-8">How it Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition"
            >
              <div className="flex justify-center text-teal-700 text-3xl mb-4">
                <FaTruckPickup />
              </div>
              <h3 className="font-bold  text-gray-800 mb-2 text-xl">{item.title}</h3>
              <p className=" text-gray-600 text-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
