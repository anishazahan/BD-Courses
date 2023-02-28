import React from 'react'
import {AiFillCheckCircle} from "react-icons/ai"

const CourseOutline = () => {
  return (
    <>
    <h2 className='text-2xl font-bold mb-10'>কোর্সটি করে যা শিখবেন</h2>
    <div className="">
       <ul className='space-y-6'>
       <div className="flex items-center space-x-5">
        <AiFillCheckCircle className='text-xl text-secondary'></AiFillCheckCircle>
        <li className='font-medium'>Tips to make your business stand out as a strong brand.</li>
       </div>
       <div className="flex items-center space-x-5">
        <AiFillCheckCircle className='text-xl text-secondary'></AiFillCheckCircle>
        <li className='font-medium'>Ways to increase the sales of your as a strong brand. </li>
       </div>
       <div className="flex items-center space-x-5">
        <AiFillCheckCircle className='text-xl text-secondary'></AiFillCheckCircle>
        <li className='font-medium'>Strategies to create appropriate content to attract new customers and retain the older ones. </li>
       </div >
       <div className="flex items-center space-x-5">
        <AiFillCheckCircle className='text-xl text-secondary'></AiFillCheckCircle>
        <li className='font-medium'>Usage of various important features of
            Facebook, such as Facebook Pages, 
            Facebook Groups
             </li>
       </div>
       </ul>
    </div>

    </>
  )
}

export default CourseOutline