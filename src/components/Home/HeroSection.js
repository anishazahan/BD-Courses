import React from 'react'
import {BiSearch} from  'react-icons/bi'
import heroImg from "../../img/hero.png"

const HeroSection = () => {
  return (
    <section>
        <div className='border-b-1 border-mutant shadow-md'>
    <div className="max-w-7xl mx-auto px-6 lg:pl-5 pb-6">
        <div className="flex flex-col-reverse lg:flex-row items-center">

            {/* ...........content section........... */}

            <div className="hero-content pb-16 lg:pb-0">
                <h2 className=' text-[4vh] md:text-[6vh] font-bold mb-[2rem] lg:mb-[4rem]'>Find your Preferred Courses 
                and Improve your skills. </h2>
                <div className="search-box mb-[3rem]">
                <div className="max-w-xl mx-auto">
                    <form>   
                    <div className="relative">
                        <input type="search"className="block p-3 pl-8 w-full text-sm text-gray-900 rounded-full border-[2px] border-secondary focus:outline-0 font-medium" placeholder="What do you went to learn today ?" required/>
                        <div className="text-white text-lg font-bold flex absolute inset-y-0 right-0 items-center px-2 mr-3 py-2 bg-secondary rounded-full m-2 pointer-events-none">
                        <BiSearch></BiSearch>
                        </div>
                    </div>
                 </form>
             </div>
                </div>
                <p className='text-sm text-slate-500'>Trending Search : WEB Development, UI & UX Design, Marketing.</p>
            </div>

               {/* ...........img section........... */}


            <div className="hero-img-content">
                <img src={heroImg} alt="" />
            </div>
        </div>
    </div>


    </div>
    </section>
  )
}

export default HeroSection