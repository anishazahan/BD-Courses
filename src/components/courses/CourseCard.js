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
     const eventRemaining = moment .utc().startOf('year').add({ minutes: Math.abs(minutes) }) .format('D [Days,]HH[ Hours,]mm [Minutes]') .split(","); 
     console.log(eventRemaining);

  return (
    <>
        <NavLink to={`/${id}`}>
        <div className="card">
            <img className='h-64' src={img} alt="" />
            <h2>{title}</h2>
            {

            }
        </div>
        </NavLink>

    </>
  )
}

export default CourseCard