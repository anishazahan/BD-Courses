import moment from 'moment/moment';
import React from 'react'
import { NavLink } from 'react-router-dom';

const CourseCard = (course) => {
    const {id,img,title,heading,date} = course;
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
        <div className="card">
            <img className='h-64' src={img} alt="" />
            <h2>{title}</h2>
            {
              minutes<0? <button>{remainingDate}</button>: <button>Running</button>
            }
        </div>
        </NavLink>

    </>
  )
}

export default CourseCard