import React from 'react'
import Courses from '../../components/courses/Courses'
import PolygonCountSection from '../../components/Home/PolygonCountSection'

const MainCoursePage = () => {
  return (
    <>
    <Courses></Courses>
    <PolygonCountSection props={"bg-secondary"}></PolygonCountSection>

    </>
  )
}

export default MainCoursePage