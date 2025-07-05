import React from 'react'
import Banner from '../../components/Banner'
import HowItWorks from '../../components/HowItWorks'
import ServiceSection from '../../components/ServiceSection'
import Brands from '../../components/Brands'
import Features from '../../components/Features'
import BeMarchent from '../../components/BeMarchent'
import FindQuestion from '../../components/FindQuestion'
import CustomerFeedback from '../../components/CustomerFeedback'

const Home = () => {
  return (
   <>
   <Banner></Banner>
   <HowItWorks></HowItWorks>
   <ServiceSection></ServiceSection>
   <Brands></Brands>
   <Features></Features>
   <BeMarchent></BeMarchent>
   <CustomerFeedback></CustomerFeedback>
   <FindQuestion></FindQuestion>
   </>
  )
}

export default Home