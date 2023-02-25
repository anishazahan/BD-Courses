import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {getData, useAllContext} from "../../Context-Api/AllContext.js"

const Courses = () => {
    const {value}=useAllContext();
    // console.log(value);

    
    // useEffect(() => {
    //     getData(api);
    //   }, []);


  return (
    <>
    <section className="max-w-7xl mx-auto lg:px-16 px-5 md:px-10 my-20">

         {/* ...........courses heading............... */}

        <div className="courses-heading">
            <div className="flex md:flex-row flex-col justify-start md:justify-between md:items-center space-y-5 md:space-y-0">
            <div className="left">
                <Link to='/' className='p-[10px] px-5 border-2 border-secondary text-secondary font-bold text-[16px] hover:underline'>Top Popular Course</Link>
                <div className="flex flex-col justify-start md:flex-row md:items-center space-x-2 mt-7 mb-5 md:mb-0">
                    <h2 className='font-bold text-3xl text-slate-900'>Most Popular</h2>
                    <h2 className='font-bold text-3xl text-secondary'>Course</h2>
                </div>
            </div>
            <div className="right ">
                <Link to='/' className='px-4 py-[10px] text-white font-semibold bg-secondary hover:bg-primary duration-300 hover:underline'>View all Courses</Link>
            </div>
            </div>
        </div>

         {/* ...........courses ............... */}

          <div className="courses">
        
            <div className="grid md:grid-col-2 lg:grid-col-3 gap-3 mx-auto">
                
            </div>

          </div>



    </section>


    </>
  )
}

export default Courses