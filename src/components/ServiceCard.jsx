import React from 'react'
import { FaTruckMoving } from "react-icons/fa";
const ServiceCard = ({service}) => {
    const {title,description,icon} = service
  return (
   <div className="bg-white shadow-lg rounded-xl p-6 max-w-md mx-auto text-center border hover:bg-[#c8e865]">
   
      <div className="flex justify-center mb-4 ">
        {icon}
      
      </div>

      {/* Heading */}
      <h3 className="text-xl font-semibold mb-2">{title}</h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
  
}

export default ServiceCard