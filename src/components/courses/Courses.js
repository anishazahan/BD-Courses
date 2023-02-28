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
      }, [api]);
      // console.log(data)



  return (
    <>
    <section className="max-w-7xl mx-auto lg:px-16 px-5 md:px-10 my-20 pb-20">

         {/* ...........courses ............... */}

          <div className="courses">
        
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto">
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