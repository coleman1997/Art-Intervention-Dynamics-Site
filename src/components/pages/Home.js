import '../../App.css'
import HeroSection from '../HeroSection';
import InformationSection from '../InformationSection';
import HomeLowerSection from '../HomeLowerSection';
import React from 'react'
 
 const Home = () => {
   return (
     <div>
        <HeroSection />
        <InformationSection />
        <HomeLowerSection />
     </div>
   )
 }
 
 export default Home