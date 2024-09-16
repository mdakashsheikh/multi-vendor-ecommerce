import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: ""
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center pb-4'>
                    <h1 className='text-[#d0d2d6] text-xl font-semibold'>Add Product</h1>
                    <Link  
                        to='/seller/dashboard/products'
                        className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:text-white px-7 py-2 rounded-sm my-2'
                    >
                        Products
                    </Link>
                </div>

                <div>
                    <form>
                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='name'>Product name</label>
                                <input 
                                    type='text' 
                                    placeholder='product name' 
                                    name='name' 
                                    id='name'
                                    onChange={inputHandle}
                                    value={state.name}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='brand'>Product brand</label>
                                <input 
                                    type='text' 
                                    placeholder='product brand' 
                                    name='brand' 
                                    id='brand'
                                    onChange={inputHandle}
                                    value={state.brand}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1 relative'>
                                <label htmlFor='category'>Category</label>
                                <input 
                                    type='text' 
                                    placeholder='product name' 
                                    name='name' 
                                    id='name'
                                    onChange={inputHandle}
                                    value={state.name}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${ cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-3 py-1 fixed'>
                                        <input 
                                            type='text' 
                                            placeholder='search'
                                            className='px-4 py-2 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden'
                                        />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px]'></div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='stock'>Stock</label>
                                <input 
                                    type='text' 
                                    placeholder='product stock' 
                                    name='stock' 
                                    id='stock'
                                    onChange={inputHandle}
                                    value={state.stock}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct