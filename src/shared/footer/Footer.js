

import React from 'react'
import { Link } from 'react-router-dom'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from "react-icons/ai"
import {FaYoutube} from "react-icons/fa"


const Footer = () => {
  return (
    <>
    

<footer className="bg-primary">
  <div className="max-w-7xl px-4 py-16 mx-auto sm:px-6 lg:px-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
                     <Link href={"/"}>
                        <div className="flex items-center">
                         <h2 className='font-semibold text-2xl text-white first-letter:font-extrabold'>Courses</h2>
                         <h2 className='text-3xl font-bold text-secondary'>BD</h2>
                        </div>
                        </Link>
        <p className="max-w-xs mt-4 text-sm text-slate-200">
        তোমার স্বপ্ন পূরণ করো 
        আমাদের সাথে
        </p>
        <div className="flex mt-8 space-x-6 ">
          <Link to='/'><AiFillFacebook className='text-secondary text-2xl'></AiFillFacebook></Link>
          <Link to='/'><FaYoutube className='text-secondary text-2xl'></FaYoutube></Link>
          <Link to='/'><AiFillInstagram className='text-secondary text-2xl'></AiFillInstagram></Link>
          <Link to='/'><AiFillLinkedin className='text-secondary text-2xl'></AiFillLinkedin></Link>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-bold text-slate-300">
            Company
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <Link to='/about' className="hover:opacity-75 text-slate-300" > About </Link>
            <Link to='/courses' className="hover:opacity-75 text-slate-300" > Courses </Link>
            <Link to='/blog' className="hover:opacity-75 text-slate-300" > Blog </Link>
            <Link to='/contact' className="hover:opacity-75 text-slate-300" > Contact </Link>
          </nav>
        </div>
        <div>
          <p className="font-bold text-slate-300">
            Others
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
          <Link to='/about' className="hover:opacity-75 text-slate-300" > Contact </Link>
            <Link to='/courses' className="hover:opacity-75 text-slate-300" > Courses </Link>
            <Link to='/blog' className="hover:opacity-75 text-slate-300" > Blog </Link>
          </nav>
        </div>
        
        <div>
          <p className="font-bold text-slate-300">
          Keep up with us at
          </p>
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
          <Link to='/about' className="hover:opacity-75 text-slate-300" > Contact </Link>
            <Link to='/courses' className="hover:opacity-75 text-slate-300" > abc@gmail.com </Link>
            <div className="">
              <input type="text" placeholder='Subscribe' className='px-3 py-2 placeholder-secondary outline-none rounded-lg w-full' />
            </div>
          </nav>
        </div>
      </div>
    </div>
    
  </div>
  <p className="mt-8 text-sm font-semibold text-slate-300 text-center pb-5">
  2023 Copyright © By <span className='text-[17px] font-extrabold text-secondary'>Anisha Zahan</span> All rights reserved.
    </p>
</footer>
    
    </>
  )
}

export default Footer