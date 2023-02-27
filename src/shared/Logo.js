import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <>

<Link href={"/"}>
                        <div className="flex items-center">
                         <h2 className='font-semibold text-2xl text-primary first-letter:font-extrabold'>Courses</h2>
                         <h2 className='text-3xl font-bold text-secondary'>BD</h2>
                        </div>
                        </Link>
    </>
  )
}

export default Logo