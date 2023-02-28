
import React, { useContext, useState } from 'react'
import { Link,NavLink } from 'react-router-dom'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Logo from './Logo';
import { auth } from '../firebase/firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [user] = useAuthState(auth);
    // console.log(user)
    const [signOut] = useSignOut(auth);
   
    const logout = async() => {
        await signOut(auth);
      };
  return (
    <>

<nav className="w-full bg-white shadow">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl lg:items-center lg:flex py-2">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 lg:block">
                    <Logo></Logo>
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
                        className={`flex-1 justify-center items-center w-full pb-3 mt-8 lg:block lg:pb-0 lg:mt-0 bg-mutant lg:bg-white ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center mx-auto space-y-8 flex flex-col  lg:flex-row lg:space-x-6 lg:space-y-0 py-6 lg:py-0">
                     
                            
                            <NavLink to='/' className="text-black hover:text-secondary font-medium text-[16px] active">
                              Home
                            </NavLink>
                            <NavLink to='/courses' className="text-black hover:text-secondary font-medium text-[16px] active">
                              Courses
                            </NavLink>
                            <NavLink to='/blog' className="text-black hover:text-secondary font-medium text-[16px] active">
                              Blog
                            </NavLink>
                            <NavLink to='/about' className="text-black hover:text-secondary font-medium text-[16px] active">
                              About Us
                            </NavLink>
                            <NavLink to='/contact' className="text-black hover:text-secondary font-medium text-[16px] active">
                              Contact
                            </NavLink>
                        </ul>

                        <div className="mt-3 space-y-2 lg:hidden ">
                       
                   {
                    user? <button onClick={logout}
                    className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">Log Out</button>
                    :
                    <Link to='/login'className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800">Login </Link> 
                   }
                    <Link to='/signUp'
                        className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100">
                        Sign up
                    </Link>
                </div>
                    </div>
                </div>

          {/* ------------ for large device login btn-------------- */}

                <div className="hidden space-x-4 lg:block">
                {
                    user? <button onClick={logout} className="px-6 py-2 text-primary bg-white font-medium border-2 border-primary duration-500 shadow hover:bg-primary hover:text-white ">
                    SignOut
                     </button>:
                     <Link to="/login" className="px-6 py-2 text-primary bg-white font-medium border-2 border-primary duration-500 shadow hover:bg-primary hover:text-white ">
                     Login
                      </Link>
                }
                   <Link to="/signUp"  className="px-6 py-[10px] text-white bg-primary font-medium duration-500 shadow hover:text-white hover:bg-secondary ">
                  SignUp
                   </Link>
                </div>
            </div>
        </nav>


    </>
  )
}

export default Navbar