import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { RiProductHuntLine } from 'react-icons/ri'

const Payments = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
           <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-5'>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$6566</h2>
                        <span className='text-sm font-medium'>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$2000</h2>
                        <span className='text-sm font-normal'>Available Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#cd00e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$50</h2>
                        <span className='text-sm font-normal'>Withdrawal Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#00cfe8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$12</h2>
                        <span className='text-sm font-normal'>Pending Amount</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#7367f0] shadow-lg'/>
                    </div>
                </div>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-3 pb-4 '>
                <div className='bg-[#283046] text-[#d0d2d6] rounded-md p-5'>
                    <h2 className='text-lg'>Send Request</h2>
                    <div className='py-5'>
                        <form>
                            <div className='flex gap-3 flex-wrap'>
                                <input 
                                    min={0}
                                    className='px-4 py-2 md:w-[79%] focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                                    type='number'
                                    name='amount'
                                />
                                    <button className='bg-blue-500 hover:shadow-blue-500/50 hover:shadow-lg hover:text-white px-7 py-2 rounded-md my-2'>
                                        Submit
                                    </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Payments