import React from 'react'
import {BiSearch} from  'react-icons/bi'
import heroImg from "../../img/hero.png"

const HeroSection = () => {
  return (
    <>

    <div className="max-w-7xl mx-auto px-6 lg:pl-5">
        <div className="flex flex-col lg:flex-row items-center">
            <div className="hero-content">
                <h2 className='text-[6vh] font-bold mb-[4rem]'>Find your Preferred Courses 
                and Improve your skills. </h2>
                <div className="search-box mb-[4rem]">
                <div class="max-w-2xl mx-auto">
                    <form>   
                    <div class="relative">
                        <input type="search"class="block p-3 pl-8 w-full text-sm text-gray-900 rounded-full border-[2px] border-secondary focus:outline-0 font-medium" placeholder="What do you went to learn today ?" required/>
                        <div class="text-white text-lg font-bold flex absolute inset-y-0 right-0 items-center px-2 mr-3 py-2 bg-secondary rounded-full m-2 pointer-events-none">
                        <BiSearch></BiSearch>
                        </div>
                    </div>
                 </form>
             </div>
                </div>
                <p className='text-sm text-slate-500'>Trending Search : WEB Development, UI & UX Design, Marketing.</p>
            </div>
            <div className="hero-img-content">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>


    </>
  )
}

export default HeroSection