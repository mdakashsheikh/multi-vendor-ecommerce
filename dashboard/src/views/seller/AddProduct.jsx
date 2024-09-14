import React from 'react'
import { Link } from 'react-router-dom'

const AddProduct = () => {
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
                                <label htmlFor='name'>Product Name</label>
                            </div>
                            <div className='flex flex-col w-full gap-1'>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct