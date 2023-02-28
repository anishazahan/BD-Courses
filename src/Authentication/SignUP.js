import React from 'react'
import Logo from '../shared/Logo'
import SignUpForm from './SignUpForm'
import signUpImg from "../../src/img/undraw_Sign_in_re_o58h.png"
import { Link } from 'react-router-dom'

const SignUP = () => {
  return (
    <>
        <div className="max-w-4xl border border-gray shadow-lg mx-auto  p-10 mb-20 mt-10">
        <Logo></Logo>
            <div className="flex pb-10 items-center justify-between">
            <div className="img-section w-full">
                    <h2 className='text-center text-slate-400'>Nice to see you!</h2>
                    <h2 className='text-3xl font-bold text-primary text-center'>Welcome</h2>
                    <img className='w-full' src={signUpImg} alt="" />
                </div>
                <div className="form-section w-full">
                   
                    <h2 className='text-2xl font-bold mt-3'>Sign Up</h2>
                    <p className='text-slate-600 font-medium my-5 text-shadow '>Already have an account? <Link to='/login' className='text-secondary font-bold hover:underline'>Please Log In</Link> </p>
                     <SignUpForm></SignUpForm>
                </div>
               
            </div>
        </div>
    </>
  )
}

export default SignUP