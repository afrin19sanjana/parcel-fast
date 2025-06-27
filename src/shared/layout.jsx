import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const layout = () => {
  return (
    <>
    <Navbar></Navbar>
   <div className="min-h-[calc(100vh-555px)]">
     <Outlet>
    </Outlet>
   </div>
    <Footer></Footer>
    </>
  )
}

export default layout