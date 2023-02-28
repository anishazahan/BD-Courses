import React from 'react'
import Blogs from '../../components/Blog/Blogs'

import Courses from '../../components/courses/Courses'
import CoursesHeading from '../../components/courses/CoursesHeading'
import CatagorySlider from '../../components/Home/CatagorySlider'
import HeroSection from '../../components/Home/HeroSection'
import HeroSection2 from '../../components/Home/HeroSection2'
import PolygonCountSection from '../../components/Home/PolygonCountSection'
import TestMonial from '../../components/Home/TestMonial'

const Home = () => {
  return (
   <>
   <HeroSection></HeroSection>
   <HeroSection2></HeroSection2>
   <CoursesHeading></CoursesHeading>
   <Courses></Courses>
   <PolygonCountSection props={"bg-primary"}></PolygonCountSection>
   <TestMonial></TestMonial>
   <Blogs></Blogs>
   
   
   {/* <CatagorySlider></CatagorySlider> */}
   </>
  )
}

export default Home