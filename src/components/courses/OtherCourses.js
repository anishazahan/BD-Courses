import React, { useEffect } from 'react'
import { useAllContext } from '../../Context-Api/AllContext';
import CourseCard from './CourseCard';

const OtherCourses = () => {
    const {getData,data}=useAllContext();
    const api = "courses.json"

    useEffect(() => {
        getData(api);
      }, [api]);
      // console.log(data)

  return (
    <>

<h2 className='text-2xl font-bold my-5'>আপনার জন্য আরও কিছু কোর্স</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {
                    data.map(item=>{
                        return(
                            <CourseCard key={item.id}></CourseCard>
                        )
                    }).slice(0,3)
                }
            </div>
    </>
  )
}

export default OtherCourses