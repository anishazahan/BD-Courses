import React from 'react'
import { NavLink } from 'react-router-dom';

const CourseCard = (course) => {
    const {id,img,title,heading} = course;
  return (
    <>
        <NavLink to={`/Courses/${heading}`}>
        <div className="card">
            <img className='h-64' src={img} alt="" />
            <h2>{title}</h2>
        </div>
        </NavLink>

    </>
  )
}

export default CourseCard