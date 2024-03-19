import React, { useState } from 'react'
import { BsArrowBarDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Orders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParpage] = useState(5)
    const [show, setShow] = useState(false);

    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='flex justify-between items-center'>
                    <select 
                        className='px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                        onChange={(e) => setParpage(parseInt(e.target.value))}
                    >
                        <option value='5'>5</option>
                        <option value='15'>15</option>
                        <option value='25'>25</option>
                    </select>
                    <input 
                        type='text' 
                        placeholder='search'
                        className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                    />
                </div>
                <div className='relative mt-5 overflow-x-auto'>
                    <div className='w-full text-sm text-left text-[#d0d2d6]'>
                        <div className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <div className='flex justify-between items-start'>
                                <div className='py-3 w-[25%]'>Order Id</div>
                                <div className='py-3 w-[13%]'>Price</div>
                                <div className='py-3 w-[18%]'>Payment Status</div>
                                <div className='py-3 w-[18%]'>Order Status</div>
                                <div className='py-3 w-[18%]'>Action</div>
                                <div className='py-3 w-[8%]'>
                                    <BsArrowBarDown/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='flex justify-between items-start border-b border-slate-700'>
                                <div className='py-4 w-[25%] font-medium whitespace-nowrap'>4689642125</div>
                                <div className='py-4 w-[13%]'>$56</div>
                                <div className='py-4 w-[18%]'>pending</div>
                                <div className='py-4 w-[18%]'>pending</div>
                                <div className='py-4 w-[18%]'>
                                    <Link>view</Link>
                                </div>
                                <div className='py-4 w-[8%]' onClick={(e) => setShow(!show)}>
                                    <BsArrowBarDown/>
                                </div>
                            </div>
                            <div className={show ? 'block border-b border-slate-700 bg-slate-800 ' : 'hidden'}>
                                <div className='flex justify-start items-start border-b border-slate-700'>
                                    <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>4689642125</div>
                                    <div className='py-4 w-[13%]'>$56</div>
                                    <div className='py-4 w-[18%]'>pending</div>
                                    <div className='py-4 w-[18%]'>pending</div>
                                </div>
                                <div className='flex justify-start items-start border-b border-slate-700'>
                                    <div className='py-4 w-[25%] font-medium whitespace-nowrap pl-3'>4689642125</div>
                                    <div className='py-4 w-[13%]'>$56</div>
                                    <div className='py-4 w-[18%]'>pending</div>
                                    <div className='py-4 w-[18%]'>pending</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Orders