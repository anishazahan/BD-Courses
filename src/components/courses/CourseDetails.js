import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAllContext } from '../../Context-Api/AllContext';

const CourseDetails = () => {
    const {title}= useParams();
    // console.log(title)

    const {getSingleData}=useAllContext();
    // console.log(getSingleData);
    const api = "courses.json"

    useEffect(() => {
        getSingleData(`${api}/${title}`);
       
      }, []);
     
  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails