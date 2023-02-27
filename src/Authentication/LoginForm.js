

import React from 'react'
import img from "../../src/img/googleIcon.png"

const LoginForm = () => {
  return (
    <><div className="">
        <form action="">
            <h2 className='font-semibold mb-3'>Enter Your Email</h2>
            <input
              type="email"
              className=" pl-3 py-[10px] placeholder-slate-300 w-full form-control bg-transparent border border-2 outline-none text-sm text-gray font-medium mb-5 focus:border-secondary"
              placeholder="abc@gmail.com"
             
            />
            <h2 className='font-semibold mb-3'>Enter Your Password</h2>
            <input
              type="password"
              className=" pl-3 py-[10px] placeholder-slate-300 w-full form-control bg-transparent border border-2 outline-none text-sm text-gray font-medium mb-5 focus:border-secondary"
              placeholder="abc@gmail.com"
             
            />
             <input
              type="submit"
              value="Login"
              className="w-full bg-secondary text-white hover:bg-primary cursor-pointer font-semibold px-4 py-[12px] mt-3 mb-5"
            />
        </form>

            <div className="">
                <h2 className='text-slate-400 text-xl text-center mb-5'>or</h2>
            </div>
           
           <hr className='text-gray' />
           
            <div className="flex justify-between  mt-7">
                <div className="google-btn flex space-x-2 border-2 border-gray px-3 py-1 rounded-full">
                    <img className='w-7' src={img} alt="" />
                    <button className='font-medium  hover:text-secondary duration-300'>Continue With Google</button>
                </div>
                <div className="signUp-btn">
                    <button className='border-2 border-slate-400 font-medium px-6 py-2 hover:bg-primary hover:text-white duration-300 rounded-full'>SignUp Now</button>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default LoginForm