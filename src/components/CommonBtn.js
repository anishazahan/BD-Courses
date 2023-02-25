import React from 'react'
import { Link } from 'react-router-dom'

const CommonBtn = ({props}) => {
  return (
    <>
     <Link to='/' className='px-4 py-[10px] text-white font-semibold bg-secondary hover:bg-primary duration-300 hover:underline'>{props}</Link>
    </>
  )
}

export default CommonBtn