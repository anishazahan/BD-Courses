import React from 'react'
import Courses from '../../components/courses/Courses'
import HeroSection from '../../components/Home/HeroSection'
import HeroSection2 from '../../components/Home/HeroSection2'
import PolygonCountSection from '../../components/Home/PolygonCountSection'

const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <Courses></Courses>
   <PolygonCountSection props={"bg-primary"}></PolygonCountSection>
   <HeroSection2></HeroSection2>
   </>
  )
}

export default Home