import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useAllContext } from '../../Context-Api/AllContext';

const CourseDetails = () => {
    const {id}= useParams();
    // console.log(title)

    const {getSingleData,singleData}=useAllContext();
    console.log(singleData);
    const api = "courses.json"

    useEffect(() => {
        getSingleData(api,id);
      }, [id]);
     
  return (
    <div>CourseDetailsfgg</div>
  )
}

export default CourseDetails