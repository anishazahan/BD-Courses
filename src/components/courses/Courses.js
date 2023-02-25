import React from 'react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <>
   

    <section className="max-w-7xl lg:px-16 px-10 my-20">

         {/* ...........courses heading............... */}

        <div className="courses-heading">
            <div className="flex md:flex-row flex-col justify-between items-center">
            <div className="left">
                <Link to='/' className='p-[10px] px-5 border-2 border-secondary text-secondary font-bold text-[16px] hover:underline'>Top Popular Course</Link>
                <div className="flex items-center space-x-2 mt-7">
                    <h2 className='font-bold text-3xl text-slate-900'>Most Popular</h2>
                    <h2 className='font-bold text-3xl text-secondary'>Course</h2>
                </div>
            </div>
            <div className="right">
                <Link to='/' className='px-4 py-[10px] text-white font-semibold bg-secondary hover:bg-primary duration-300 hover:underline'>View all Courses</Link>
            </div>
            </div>
        </div>

    </section>


    </>
  )
}

export default Courses