import React from 'react'
import ParcelFastLogo from '../shared/ParcelFastLogo'
import NavMenu from '../shared/NavMenu'



const Footer = () => {
  return (
    <footer className="container mx-auto  rounded-4xl urbsnist footer footer-horizontal footer-center font-bold  bg-neutral text-neutral-content p-10">
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
      <div className="  ">
        <ul className='flex justify-between gap-x-6 items-center'>
          <li><svg to='' xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className='text-blue-600'>
  <path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4C0 23.2.8 24 1.8 24h20.4c1 0 1.8-.8 1.8-1.8V1.8C24 .8 23.2 0 22.2 0zM7.1 20.4H3.6V9h3.5v11.4zM5.3 7.5c-1.1 0-2-.9-2-2s.9-2 2-2c1.2 0 2.1.9 2.1 2s-.9 2-2.1 2zM20.4 20.4h-3.5v-5.6c0-1.3-.5-2.2-1.7-2.2-1 0-1.5.7-1.8 1.4-.1.2-.1.5-.1.8v5.6h-3.5s.1-9 0-9.9h3.5v1.4c.5-.8 1.4-1.9 3.3-1.9 2.4 0 4.2 1.6 4.2 5v5.4z"/>
</svg>
</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="M13.3 10.7 21.9 0h-2.1l-7.4 9.3L6.3 0H0l9.1 13.2L0 24h2.1l7.8-9.8L17.8 24H24l-10.7-13.3z"/>
</svg>

</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className='text-blue-800'>
  <path d="M22.7 0H1.3C.6 0 0 .6 0 1.3v21.3C0 23.4.6 24 1.3 24h11.5V14.7H9.7v-3.6h3.1V8.4c0-3.1 1.9-4.8 4.7-4.8 1.3 0 2.4.1 2.7.1v3.1h-1.8c-1.4 0-1.7.7-1.7 1.6v2.1h3.4l-.4 3.6h-3v9.3h5.9c.7 0 1.3-.6 1.3-1.3V1.3c0-.7-.6-1.3-1.3-1.3z"/>
</svg>
</li>
          <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 24 24" className='text-red-800'>
  <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-.9-2-1-2.5-1.1C17.2 2.5 12 2.5 12 2.5h0s-5.2 0-8.1.3c-.6 0-1.6.2-2.5 1.1C.7 4.6.5 6.2.5 6.2S.3 8.1.3 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.6.9 2.3c.9.9 2.1.9 2.6 1C6.8 19.5 12 19.5 12 19.5s5.2 0 8.1-.3c.6-.1 1.6-.1 2.5-1 .7-.7.9-2.3.9-2.3s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.8 14.7V8.6l6.3 3.1-6.3 3z"/>
</svg>
</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer