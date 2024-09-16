import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
    const categories = [
        {
            id: 1,
            name: "Sports"
        },
        {
            id: 2,
            name: "T-Shirt"
        },
        {
            id: 3,
            name: "Jarcy"
        },
        {
            id: 4,
            name: "Pant"
        },
        {
            id: 5,
            name: "Watch"
        },    
    ]

    const [state, setState] = useState({
        name: "",
        description: "",
        discount: "",
        price: "",
        brand: "",
        stock: ""
    })

    const [cateShow, setCateShow] = useState(false)
    const [category, setCategory] = useState('')
    const [allCategory, setAllCategory] = useState(categories)
    const [seachValue, setSearchValue] = useState('')

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const categorySearch = (e) => {
        const value = e.target.value
        setSearchValue(value)
        if(value) {
            let srcValue = allCategory?.filter(c => c.name.toLowerCase().indexOf(value.toLowerCase()) > -1)
            setAllCategory(srcValue)
        } else {
            setAllCategory(categories)
        }
    }

    // useEffect(() => {
    //     setAllCategory(categories)
    // }, [])

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
                                    onClick={() => setCateShow(!cateShow)}
                                    readOnly
                                    type='text' 
                                    placeholder='--select category--'
                                    id='category'
                                    onChange={inputHandle}
                                    value={category}
                                    className='px-4 py-2 hover:cursor-pointer focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                                <div className={`absolute top-[101%] bg-slate-800 w-full transition-all ${ cateShow ? 'scale-100' : 'scale-0'}`}>
                                    <div className='w-full px-4 py-2 fixed'>
                                        <input
                                            value={seachValue}
                                            type='text' 
                                            placeholder='search'
                                            className='w-full px-3 py-1 focus:border-indigo-500 outline-none bg-transparent border border-slate-700 rounded-md text-[#d0d2d6] overflow-hidden'
                                        />
                                    </div>
                                    <div className='pt-14'></div>
                                    <div className='flex justify-start items-start flex-col h-[200px] overflow-y-scroll'>
                                        {allCategory.map((c, i) => (
                                            <span
                                                className={`px-4 py-2 hover:bg-indigo-500 hover:text-white hover:shadow-lg w-full cursor-pointer ${category === c.name && 'bg-indigo-500'}`}
                                                onClick={() => {
                                                    setCateShow(false)
                                                    setCategory(c.name)
                                                    setSearchValue('')
                                                    setAllCategory(categories)
                                                }}
                                            >{c.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='stock'>Stock</label>
                                <input 
                                    type='number' 
                                    min={0}
                                    placeholder='product stock' 
                                    name='stock' 
                                    id='stock'
                                    onChange={inputHandle}
                                    value={state.stock}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col mb-3 md:flex-row gap-4 w-full text-[#d0d2d6]'>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='price'>Price</label>
                                <input 
                                    type='number'
                                    placeholder='price' 
                                    name='price' 
                                    id='price'
                                    onChange={inputHandle}
                                    value={state.price}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                            <div className='flex flex-col w-full gap-1'>
                                <label htmlFor='discount'>Discount</label>
                                <input 
                                    type='number' 
                                    placeholder='%Discount%' 
                                    name='discount' 
                                    id='discount'
                                    onChange={inputHandle}
                                    value={state.discount}
                                    className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                />
                            </div>
                        </div>
                        <div className='flex flex-col w-full gap-1 text-[#d0d2d6]'>
                            <label htmlFor='description'>Description</label>
                            <textarea
                                placeholder='Description' 
                                rows={4}
                                name='description' 
                                id='description'
                                onChange={inputHandle}
                                value={state.description}
                                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                            ></textarea>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct