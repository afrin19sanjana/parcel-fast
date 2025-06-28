import React from 'react'
import Banner from '../../components/Banner'
import HowItWorks from '../../components/HowItWorks'
import ServiceSection from '../../components/ServiceSection'
import Brands from '../../components/Brands'
import Features from '../../components/Features'

const Home = () => {
  return (
   <>
   <Banner></Banner>
   <HowItWorks></HowItWorks>
   <ServiceSection></ServiceSection>
   <Brands></Brands>
   <Features></Features>
   </>
  )
}

export default Home