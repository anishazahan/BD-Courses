

import React, { useContext, useState } from 'react'
import {Link} from "react-router-dom"
import img from "../../src/img/googleIcon.png"
import { useForm } from "react-hook-form";
import { authContext } from './AuthProvider';

const LoginForm = () => {

  //---------from react hook form---------
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

   //---------authentication ---------
    const {signIn} = useContext(authContext);
    const[loginError,setLoginError]=useState("")


  //---------custom function for get form data---------

  const handleLogin = (data) => {
    // console.log(data);
    setLoginError("");
    signIn(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error =>
      // console.log(error.message),
      setLoginError(error.message)
    )
  };
  return (
    <><div className="">
        <form onSubmit={handleSubmit(handleLogin)}>
            <h2 className='font-semibold mb-3'>Enter Your Email</h2>
            <input
              type="email"
              className=" pl-3 py-[10px] placeholder-slate-300 w-full form-control bg-transparent border border-2 outline-none text-sm text-black placeholder-gray font-medium mb-5 focus:border-secondary"
              placeholder="abc@gmail.com"
              //---------for email get data and validate---------
              {...register("email", {
                required: {
                  value: true,
                  message: "Email must be Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Enter Valid Email",
                },
              })}
            />
            {/* //---------for email error handling--------- */}
             <div className="">
              {errors.email?.type === "required" && (
                <p className="text-sm text-red-600 mb-2 ">
                  {errors.email.message}
                </p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="text-sm text-red-600 mb-2 ">
                  {errors.email.message}
                </p>
              )}
            </div>
            <h2 className='font-semibold mb-3'>Enter Your Password</h2>
            <input
              type="password"
              className=" pl-3 py-[10px] placeholder-slate-300 w-full form-control bg-transparent border border-2 outline-none text-sm text-gray font-medium mb-5 focus:border-secondary"
              placeholder="abc@gmail.com"
             //---------for  password data and validate---------
              {...register("password", {
                required: {
                  value: true,
                  message: "Password must be Required",
                }
              })}
            />
              {/* //---------for email error handling--------- */}
              <div className=" ">
              {errors.password?.type === "required" && (
                <p className="text-sm text-red-600 mb-2 ">
                  {errors.password.message}
                </p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
             <input
              type="submit"
              value="Login"
              className="w-full bg-secondary text-white hover:bg-primary cursor-pointer font-semibold px-4 py-[12px] mt-3 mb-5"
            />
        </form>
        <div className="">
          {loginError && <p className="text-red text-sm font-medium">{loginError}</p>}
        </div>

            <div className="">
                <h2 className='text-slate-400 text-xl text-center mb-5'>or</h2>
            </div>
           
           <hr className='text-gray' />
           
            <div className="flex justify-between  mt-7 items-center">
                <div className="google-btn flex space-x-2 border-2 border-gray px-3 py-1 rounded-full">
                    <img className='w-7' src={img} alt="" />
                    <button className='font-medium  hover:text-secondary duration-300'>Continue With Google</button>
                </div>
                <div className="signUp-btn">
                    <Link to='/signUp' className='border-2 border-slate-400 font-medium px-6 py-2 hover:bg-primary hover:text-white duration-300 rounded-full'>SignUp Now</Link>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default LoginForm