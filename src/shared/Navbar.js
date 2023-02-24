
import React, { useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
  return (
    <>

<nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex lg:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                        <Link href={"/"}>
                        logo
                        </Link>
                        <div className="lg:hidden">
                            <button
                                className="p-2 text-green-700 rounded-md outline-none focus:border-green-700 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                                 
                                ) : (
                                <AiOutlineClose></AiOutlineClose>
                               
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-center items-center w-full pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center mx-auto space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                     
                            
                            <NavLink to='/' className="text-black hover:text-indigo-200 active">
                              Home
                            </NavLink>
                            <NavLink to='/courses' className="text-black hover:text-indigo-200 active">
                              Courses
                            </NavLink>
                            <NavLink to='/blog' className="text-black hover:text-indigo-200 active">
                              Blog
                            </NavLink>
                            <NavLink to='/about' className="text-black hover:text-indigo-200 active">
                              About Us
                            </NavLink>
                            <NavLink to='/contact' className="text-black hover:text-indigo-200 active">
                              Contact
                            </NavLink>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden ">
                    <button
                       
                        className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </button>
                    <button
                       
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </button>
                </div>
                    </div>
                </div>
                <div className="hidden space-x-2 lg:block">
                    <button
                     
                        className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                        Sign in
                    </button>
                    <button
                       
                        className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                        Sign up
                    </button>
                </div>
            </div>
        </nav>


    </>
  )
}

export default Navbar