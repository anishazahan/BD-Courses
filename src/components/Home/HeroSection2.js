import React from 'react'
import {BsCheck} from "react-icons/bs"

const HeroSection2 = () => {
  return (
    <section className='mb-20'>
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-16">
            <div className="flex justify-between">
                <div className="left">
                    <h2 className='text-2xl font-bold'>তোমার লক্ষ্য <span className='text-2xl font-bold text-secondary'>অর্জন </span> কর</h2>
                    <h2 className='text-2xl font-bold mt-2'>আমাদের  <span className='text-2xl font-bold text-secondary'>সাথে...</span></h2>
                    <p className='text-slate-500 w-1/3 font-medium'>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                    <ul>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-3xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Upskill your organization.</li>
                     </div>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-3xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Access more then 25+ online courses</li>
                     </div>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-3xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Learn the latest skills</li>
                     </div>
                       
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection2