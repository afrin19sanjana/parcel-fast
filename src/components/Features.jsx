import React from 'react' 
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import FeatureCard from './FeatureCard';
import trackingAnimation from '../lottieAnimation/one.json';
import safeDeliveryAnimation from '../lottieAnimation/three.json';
import supportAnimation from '../lottieAnimation/two.json';


const Features = () => {
    const serviceHighlights = [
  {
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    animation: trackingAnimation,
  },
  {
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
    animation: safeDeliveryAnimation,
  },
  {
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
       animation: supportAnimation,
  },
];
  return (
    <section className="py-16 ">
      <div className="container mx-auto px-6  ">
        {serviceHighlights.map((feature, index) => (
          <FeatureCard key={index} feature={feature}></FeatureCard>
        ))}
      </div>
     <div className="container mx-auto border-dashed border-2 border-b-cyan-950 my-16"></div>
    </section>
  )
}
export default Features