
import ServiceCard from './ServiceCard';
import React from 'react';
import {
  FaShippingFast,
  FaMapMarkedAlt,
  FaWarehouse,
  FaMoneyBillWave,
  FaHandshake,
  FaUndoAlt
} from 'react-icons/fa';
const services= [
  {
    id: "1",
    icon: <FaShippingFast size={40} className="text-indigo-600" />,
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    id: "2",
    icon: <FaMapMarkedAlt size={40} className="text-indigo-600" />,
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    id: "3",
    icon: <FaWarehouse size={40} className="text-indigo-600" />,
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    id: "4",
    icon: <FaMoneyBillWave size={40} className="text-indigo-600" />,
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    id: "5",
    icon: <FaHandshake size={40} className="text-indigo-600" />,
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    id: "6",
    icon: <FaUndoAlt size={40} className="text-indigo-600" />,
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const ServiceSection = () => {
  return (
    <section className="container mx-auto py-16 my-16 bg-[#03373d] rounded-4xl">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6 text-white">Our Services</h2>
        <p className="text-gray-200 mb-12  ">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br></br>business shipments — we deliver on time, every time.</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service}></ServiceCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
