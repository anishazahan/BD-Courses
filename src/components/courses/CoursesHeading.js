import React from 'react'
import CommonBtn from '../CommonBtn'
import {Link} from 'react-router-dom'

const CoursesHeading = () => {
  return (
    <div  className="max-w-7xl mx-auto lg:px-16 px-5 md:px-10 my-20 pb-20">

<div className="courses-heading mb-14">
            <div className="flex md:flex-row flex-col justify-start md:justify-between md:items-center space-y-5 md:space-y-0">
            <div className="left">
                <Link to='/' className='p-[10px] px-5 border-2 border-secondary text-secondary font-bold text-[16px] hover:underline'>Top Popular Course</Link>
                <div className="flex flex-col justify-start md:flex-row md:items-center space-x-2 mt-7 mb-5 md:mb-0">
                    <h2 className='font-bold text-3xl text-slate-900'>Most Popular</h2>
                    <h2 className='font-bold text-3xl text-secondary'>Course</h2>
                </div>
            </div>
            <div className="right ">
               <CommonBtn props={"View All Courses"}></CommonBtn>
            </div>
            </div>
        </div>
    </div>
  )
}

export default CoursesHeading