import React from 'react'
import {BsCheck} from "react-icons/bs"
import CommonBtn from '../CommonBtn'
import HeroImg from "../../img/hero.jpg"

const HeroSection2 = () => {
  return (
    <section className='mt-20 mb-28'>
        <div className="max-w-7xl mx-auto px-10 lg:px-16">
            <div className="flex lg:flex-row flex-col-reverse justify-between items-center lg:space-x-4 ">
                <div className="left">
                    <h2 className='text-2xl font-bold'>তোমার লক্ষ্য <span className='text-2xl font-bold text-secondary'>অর্জন </span> কর</h2>
                    <h2 className='text-2xl font-bold mt-2'>আমাদের  <span className='text-2xl font-bold text-secondary'>সাথে...</span></h2>
                    <p className='text-slate-500 font-medium my-5'>Lost the plot bobby such a fibber bleeding bits and bobs don't get shirty with me bugger all mate chinwag super pukka william barney, horse play buggered.</p>
                    <ul className='space-y-3'>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-2xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Upskill your organization.</li>
                     </div>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-2xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Access more then 25+ online courses</li>
                     </div>
                     <div className="flex items-center space-x-1">
                     <BsCheck className='font-extrabold text-2xl text-secondary'></BsCheck><li className='font-medium text-slate-800'>Learn the latest skills</li>
                     </div> 
                    </ul>
                    <div className=" mt-10">
                    <CommonBtn props={"Apply Now"}></CommonBtn>
                    </div>
                </div>

                <div className="right w-full mb-16 lg:mb-0">
                    <img className='rounded-full h-[450px] lg:w-[450px] w-full object-cover  border-2 border-secondary' src={HeroImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection2