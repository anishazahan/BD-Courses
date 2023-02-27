import React from 'react'
import Logo from '../shared/Logo'
import LoginForm from './LoginForm'
import loginImg from "../../src/img/undraw_Login_re_4vu2.png"

const Login = () => {
  return (
    <>
        <div className="max-w-4xl border border-gray shadow-lg mx-auto  p-10 mb-20 mt-10">
            <div className="flex pb-10 items-center justify-between">
                <div className="form-section w-full">
                    <Logo></Logo>
                    <h2 className='text-2xl font-bold mt-3'>Login In</h2>
                    <p className='text-slate-500 my-5 text-shadow '>Log in with your data that you entered
                     during your registration.</p>
                     <LoginForm></LoginForm>

                </div>
                <div className="img-section w-full">
                    <h2 className='text-center text-slate-400'>Nice to see you again</h2>
                    <h2 className='text-3xl font-bold text-secondary text-center'>Welcome back</h2>
                    <img className='w-full' src={loginImg} alt="" />
                </div>

            </div>
        </div>
    </>
  )
}

export default Login