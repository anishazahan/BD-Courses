import moment from 'moment/moment.js'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import {useAllContext} from "../../Context-Api/AllContext.js"
import CommonBtn from '../CommonBtn.js'
import CourseCard from './CourseCard.js'

const Courses = () => {
    const {getData,data}=useAllContext();
    const api = "courses.json"

    useEffect(() => {
        getData(api);
      }, []);
      console.log(data)


    //   const today = moment().format();
    //    const now = moment(today);
    // const month = moment(event.date, 'YYY-MM-DD').format('MMMM') 
    // const day = moment(event.date, 'YYY-MM-DD').format('DD')
    //  const minutes = now.diff(event.date, 'minutes') 
     // console.log(now); const eventRemaining = moment .utc().startOf('year').add({ minutes: Math.abs(minutes) }) .format('D [Days,]HH[ Hours,]mm [Minutes]') .split(","); console.log(eventRemaining);


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
               <CommonBtn props={"View All Courses"}></CommonBtn>
            </div>
            </div>
        </div>

         {/* ...........courses ............... */}

          <div className="courses">
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mx-auto">
                {
                    data.map(course=><CourseCard key={course.id} {...course}></CourseCard>)
                }
            </div>

          </div>



    </section>


    </>
  )
}

export default Courses