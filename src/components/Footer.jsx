import React from 'react'
import ParcelFastLogo from '../shared/ParcelFastLogo'
import NavMenu from '../shared/NavMenu'

const Footer = () => {
  return (
    <footer className="container mx-auto footer footer-horizontal footer-center font-bold  bg-neutral text-neutral-content p-10">
  <aside>
   <div className="">
 <ParcelFastLogo></ParcelFastLogo>
   </div>
    <p className="opacity-40">
  Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to<br></br> business shipments — we deliver on time, every time.
    </p>

  </aside>
     <div className="border-b-2 border-dashed border-gray-800 w-full my-4 font-bold "></div>
  <nav>
    <div className="grid grid-flow-col gap-4">
     <NavMenu></NavMenu>
    </div>
  </nav>
   <div className="border-b-2 border-dashed border-gray-800 w-full my-4 font-bold "></div>
</footer>
  )
}

export default Footer