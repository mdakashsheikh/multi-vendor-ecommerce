import React, { useEffect, useState } from 'react';
import { PropagateLoader } from 'react-spinners'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { admin_login, messageClear } from '../../store/Reducers/authReducer';

export default function AdminLogin() {

    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { loader, errorMessage, successMessage } = useSelector(state => state.auth)
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

    const overrideStyle = {
        display: 'flex',
        margin: '0 auto',
        height: '24px',
        justifyContent: 'center',
        alignItems: 'center'
    }

    useEffect(() => {
        if(errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())
        }
        if(successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())
            navigate('/')
        }
    }, [errorMessage, successMessage])

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
                        <button disabled={ loader ? true : false } className='bg-blue-500 w-full hover:shadow-blue-500/50 hover:shadow-lg text-white rounded-lg px-7 py-2 mb-3'>
                            {
                                loader ? <PropagateLoader color='#fff' cssOverride={overrideStyle}/> : 'Login'
                            }
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
