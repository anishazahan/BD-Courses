import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAllContext } from '../../Context-Api/AllContext';

const CourseDetails = () => {
    const {title}= useParams();
    console.log(title)

    const {getData,data}=useAllContext();

    const api = "courses.json"

    useEffect(() => {
        getData(`${api}/${title}`);
        console.log(data);
      }, []);
     
  return (
    <div>CourseDetails</div>
  )
}

export default CourseDetails