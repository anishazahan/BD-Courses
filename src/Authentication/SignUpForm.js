

import React, { useCallback, useContext } from 'react'
import img from "../../src/img/googleIcon.png"
import { useForm } from "react-hook-form";
import { authContext} from "./AuthProvider"

const SignUpForm = () => {

  //---------from react hook form---------
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const {createUser} = useContext(authContext)

  //---------custom function for get form data---------

  const handleSignIn = (data) => {
    // console.log(data);
    createUser(data.email,data.password)
    .then(result=>{
      const user = result.user;
      console.log(user)
    })
    .catch(error=>console.log(error))
  };
  return (
    <><div className="">
        <form onSubmit={handleSubmit(handleSignIn)}>

        <h2 className='font-semibold mb-3'>Enter Your Name</h2>
        <input
              type="text"
              className=" pl-3 py-[10px] placeholder-black form-control w-full bg-transparent border border-2 outline-none text-sm text-black placeholder-gray font-medium mb-2 focus:border-secondary"
              placeholder="Your Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name must be Required",
                },
              })}
            />
             {/* //---------for name error handling--------- */}
             <div className="mb-2">
              {errors.name?.type === "required" && (
                <p className="text-sm text-red-600 mb-2 ">
                  {errors.name.message}
                </p>
              )}
            </div>
            <h2 className='font-semibold mb-3'>Enter Your Email</h2>
            <input
              type="email"
              className=" pl-3 py-[10px] w-full form-control bg-transparent border outline-none text-sm text-black placeholder-gray font-medium mb-5 focus:border-secondary"
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
              className=" pl-3 py-[10px] placeholder-slate-300 w-full form-control bg-transparent  border-2 outline-none text-sm text-gray font-medium mb-5 focus:border-secondary"
              placeholder="abc@gmail.com"
             //---------for  password data and validate---------
              {...register("password", {
                required: {
                  value: true,
                  message: "Password must be Required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be min six character",
                },
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
              className="w-full bg-primary text-white hover:bg-secondary cursor-pointer font-semibold px-4 py-[12px] mt-3 mb-5"
            />
        </form>

            <div className="">
                <h2 className='text-slate-400 text-xl text-center mb-5'>or</h2>
            </div>
           
           <hr className='text-gray' />
           
            <div className="flex justify-center mt-7">
                <div className="google-btn flex space-x-2 border-2 border-gray px-3 py-1 rounded-full">
                    <img className='w-7' src={img} alt="" />
                    <button className='font-medium  hover:text-secondary duration-300'>Continue With Google</button>
                </div>
               
            </div>
        </div>
        
    </>
  )
}

export default SignUpForm