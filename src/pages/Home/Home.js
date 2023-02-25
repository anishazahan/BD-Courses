import React from 'react'
import Courses from '../../components/courses/Courses'
import HeroSection from '../../components/Home/HeroSection'
import PolygonCountSection from '../../components/Home/PolygonCountSection'

const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <Courses></Courses>
   <PolygonCountSection></PolygonCountSection>
   </>
  )
}

export default Home