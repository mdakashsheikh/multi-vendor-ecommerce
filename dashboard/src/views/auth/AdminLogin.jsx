import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { admin_login } from '../../store/Reducers/authReducer';

export default function AdminLogin() {

    const dispatch = useDispatch()
    const [state, setState] = useState({
        email: '',
        password: ''
    })

    const inputHandler = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(admin_login(state))
    }

    return (
        <div className='min-w-screen min-h-screen bg-[#161d31] flex justify-center items-center'>
            <div className='w-[350px] text-[#d0d2d6] p-2 '>
                <div className='bg-[#283046] p-4 rounded-lg'>
                    <div className='h-[70px] flex justify-center items-center'>
                        <div className='w-[180px] h-[50px]'>
                            <img className='w-full h-full' src='http://localhost:5173/images/logo.png' alt='images'/>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='flex flex-col w-full gap-1 mb-3'>
                            <label htmlFor='email' className='ml-1'>Email</label>
                            <input 
                                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-lg text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' 
                                type='email' 
                                name='email' 
                                placeholder='email' id='email' required
                                onChange={inputHandler} value={state.email}
                            />
                        </div>
                        <div className='flex flex-col w-full gap-1 mb-5'>
                            <label htmlFor='password' className='ml-1'>Password</label>
                            <input 
                                className='px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-lg text-[#d0d2d6] focus:border-indigo-500 overflow-hidden' 
                                type='password' 
                                name='password' 
                                placeholder='Password' id='password' required
                                onChange={inputHandler} value={state.password}
                            />
                        </div>
                        <button className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-lg px-7 py-2 mb-3'>
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
