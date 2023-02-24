import React from 'react'
import { Link } from 'react-router-dom'
import "../../pages/Home/home.css"

const PolygonCountSection = () => {
  return (
    <>
    <section className='pt-12 pb-20 my-20 polygon-style bg-primary'>

        <div className="flex flex-col lg:flex-row max-w-7xl px-10 lg:px-16 justify-between items-center space-y-4 lg:space-y-0">
          {/* .........left-content.................. */}
          <div className="left-content space-y-8 lg:mt-[-6rem]">
            <h2 className=' text-2xl md:text-3xl text-white font-bold'>Create Your Free Account</h2>
            <h2 className=' text-[17px] text-white font-semibold'>"নিজের সফলতা খুঁজুন!"</h2>
            <div className="">
              <Link to='/' className='px-6 py-2 bg-gray text-primary text-[17px] rounded-full font-bold'>Start Learning For Us</Link>
            </div>
          </div>

           {/* .........left-content.................. */}

          <div className="right-content space-y-7 mb-24">
            <h2  className=' text-2xl md:text-3xl text-slate-100 font-bold'>Register Now and Get a
           <br/>50% Discount</h2>
           <h2  className=' text-[17px] text-slate-300 font-semibold'>Get more online courses for your</h2>
           <div className="count-down flex items-center space-x-6">
            <div className="flex flex-col justify-center space-y-1">
              <h2 className='text-slate-50 text-5xl font-bold'>30</h2>
              <h2 className='text-slate-50 font-bold ml-2 '>Days</h2>
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <h2 className='text-slate-50 text-5xl font-bold'>20</h2>
              <h2 className='text-slate-50 font-bold ml-2 '>Days</h2>
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <h2 className='text-slate-50 text-5xl font-bold'>17</h2>
              <h2 className='text-slate-50 font-bold ml-2 '>Days</h2>
            </div>
            <div className="flex flex-col justify-center space-y-1">
              <h2 className='text-slate-50 text-5xl font-bold'>37</h2>
              <h2 className='text-slate-50 font-bold ml-2 '>Days</h2>
            </div>
           </div>
          </div>
        </div>
    </section>
    
    </>
  )
}

export default PolygonCountSection