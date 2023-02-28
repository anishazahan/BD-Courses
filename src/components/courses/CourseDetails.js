import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAllContext } from '../../Context-Api/AllContext';
import { BsFacebook,BsPlayCircle} from 'react-icons/bs';
import { FaUserPlus} from 'react-icons/fa';

const CourseDetails = () => {
 
    const {id}= useParams();
    // console.log(id);
  
    const {getSingleData,singleData}=useAllContext();
    console.log(singleData);
    const api = "courses.json"

    useEffect(() => {
        getSingleData(api,id);
      }, [id]);

      const {img,title,heading,date,review,students,instructorImg,InstructorName,discountPrice,actualPrice} = singleData;
     
  return (
    <>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mt-6 mb-20">
        <div className="flex flex-col lg:flex-row space-x-8">
          <div className="left">

          </div>
          <div className="left w-[60%]">
            <h2 className='text-2xl font-bold mt-5 mb-2'>{title}</h2>
            <p className='text-[16px] text-slate-400 '>Grow your business through Facebook Marketing. Define your ideal target audience, build a successful presence on the platform following our proven best practices, launch profitable digital campaigns that generate sales every day. Learn the nitty gritties of FB pages, groups, FB ads (boosting), branding, and more.</p>
            <h2 className='my-3 font-bold text-xl'>কোর্স ইন্সট্রাক্টর</h2>
{/* 
            //-----for course instructor"......... */}
            <div className="flex items-center border border-gray shadow p-3 space-x-4 max-w-sm">
              <img className='w-16' src={instructorImg} alt="" />
              <div className="flex flex-col">
                <h2 className='font-bold text-xl text-slate-700'>{InstructorName}</h2>
                <h2 className='text-sm text-slate-500'>Founder & COO, Neooxi</h2>
                <h2 className='text-sm text-slate-500'>Digital marketer at corporate for 2+ Years</h2>
                <div className="flex space-x-3">
                <BsFacebook className='text-2xl text-primary'></BsFacebook>
                <BsFacebook className='text-2xl text-primary'></BsFacebook>
                <BsFacebook className='text-2xl text-primary'></BsFacebook>

                </div>
              </div>
            </div>
          </div>

        {/* /-----for course apply"......... */} 

          <div className="right w-[40%]">
            <div className="border border-gray shadow-xl">
              <img src={img} alt="" />
              <div className="px-5 py-3">
              <div className="flex items-center space-x-3">
            <h2 className='text-xl'>৳{actualPrice}</h2>
            <del className='text-xl text-secondary'>{discountPrice}</del>
          </div>
          <div className=" my-4 mx-auto text-center w-full">
            <button className='border w-full py-[10px] text-xl border-secondary text-secondary font-bold'>Enroll Now</button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <BsPlayCircle></BsPlayCircle>
              <p className='text-slate-400'>Lessons</p>
            </div>
            <div className="flex items-center space-x-2">
              <FaUserPlus></FaUserPlus>
              <p className='text-slate-400'>{students}</p>
            </div>
            </div>
            <h2>Time 24 Hourse</h2>
            <h2>30 vedios</h2>
            <h2>100 Students</h2>
          
          
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails