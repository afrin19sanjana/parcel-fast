import React from 'react'
import Lottie from 'lottie-react';
import { motion } from 'framer-motion'; 
const FeatureCard = ({feature}) => {

     const {title, description,animation} = feature
  return (
            <div
            
            className="flex flex-col lg:flex-row items-center gap-10 mb-16 shadow-2xl rounded-3xl bg-gray-50"
          >
            {/* Left Side Animation */}
            <motion.div
              className="w-full lg:w-1/2 "
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Lottie
                animationData={animation}
                loop={true}
                className="w-full h-[300px] lg:h-[400px]"
              />
            </motion.div>
            <div className="border-dashed border-r border-2 border-blue-600"></div>

            {/* Right Side Content */}
            <motion.div
              className="w-full lg:w-1/2 text-left"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 p-6">
                {title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed p-6">
                {description}
              </p>
            </motion.div>
          </div>
  )
}

export default FeatureCard