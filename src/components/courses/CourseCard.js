import moment from 'moment/moment';
import React from 'react'
import { NavLink } from 'react-router-dom';
import {FaUserPlus} from "react-icons/fa"
import {BsPlayCircle} from "react-icons/bs"
import {AiFillStar} from "react-icons/ai"

const CourseCard = (course) => {
    const {id,img,title,heading,date,review,students,instructorImg,InstructorName,discountPrice,actualPrice} = course;
    // console.log(date);

    const today = moment().format();
    const now = moment(today);
    const month = moment(date, 'YYY-MM-DD').format('MMMM') 
    const day = moment(date, 'YYY-MM-DD').format('DD')
     const minutes = now.diff(date, 'minutes') 
    //  console.log("thats miniutes"+ minutes); 
     const remainingDate = moment .utc().startOf('year').add({ minutes: Math.abs(minutes) }) .format('D [Days,]HH[ Hours,]mm [Minutes]') .split(","); 
  //  if(minutes<0){
  //   console.log(remainingDate+"Coming Soon");
  //  }else{
  //   console.log("Running")
  //  }
  return (
    <>
        <NavLink to={`/${id}`}>
        <div className="card border shadow-md border-gray">
           
           <div className="relative">
           <img className='h-64 ' src={img} alt="" />
           <div className="bg-black/5 absolute top-0 left-0 right-0 bottom-0 w-full h-full"></div>
           <div className="bg-black/50 absolute top-0 left-0 right-0 w-full h-12">
            <h2 className='text-2xl text-center text-white flex items-center justify-center font-bold mt-1'>{
              minutes<0? <button>{remainingDate}</button>: <button>Running</button>
            }</h2>
           </div>
           </div>
          <div className=" px-4 py-3">
            <h2 className='text-secondary px-2 py-1 bg-pink-200 inline text-sm font-semibold'>{heading}</h2>
            <h2 className='text-2xl font-bold mt-3 mb-2'>{title}</h2>
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
            <div className="flex items-center space-x-2 my-1">
              <div className="flex items-center">
                <AiFillStar className='text-secondary'></AiFillStar>
                <AiFillStar className='text-secondary'></AiFillStar>
                <AiFillStar className='text-secondary'></AiFillStar>
                <AiFillStar className='text-secondary'></AiFillStar>
                <AiFillStar className='text-secondary'></AiFillStar>
              </div>
              <h2>{review}Reviews</h2>
            </div>

            <div className="flex items-center space-x-3">
            <img className='w-8' src={instructorImg} alt="" />
              <p className='text-slate-500'>By</p>
              <h2 className='text-slate-400'>{InstructorName}</h2>
              <h2 className='text-sm font-bold'>{heading}</h2>
            </div>
          <div className="flex justify-between my-4">
          <div className="flex items-center space-x-3">
            <h2 className='text-xl'>৳{actualPrice}</h2>
            <del className='text-xl text-secondary'>{discountPrice}</del>
          </div>
          <div className="">
            {
                 minutes<0? <button className='font-bold px-4 py-2 bg-mutant text-primary'>Upcoming</button>: <button className='font-bold px-4 py-2 bg-pink-200 text-secondary'>Running</button>
            }
          </div>
          </div>

          </div>
        </div>
        </NavLink>

    </>
  )
}

export default CourseCard