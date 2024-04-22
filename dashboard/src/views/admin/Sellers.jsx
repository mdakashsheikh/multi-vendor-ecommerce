import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Pagination from '../Pagination';
import { BsImage } from 'react-icons/bs';
import { MdClose } from "react-icons/md";

const Sellers = () => {
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
                <div className='relative overflow-x-auto '>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-xs text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>No</th>
                                <th scope='col' className='py-3 px-4'>Image</th>
                                <th scope='col' className='py-3 px-4'>Name</th>
                                <th scope='col' className='py-3 px-4'>Shop Name</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Email</th>
                                <th scope='col' className='py-3 px-4'>Division</th>
                                <th scope='col' className='py-3 px-4'>District</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm font-normal'>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => (
                                    <tr>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>{d}</td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <img
                                                className='w-[45px] h-[45px]'
                                                src={`http://localhost:5173/images/category/${d}.jpg`} 
                                                alt=''
                                            />
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>Sheikh Farid</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>Sheikh Fashion</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>Pending</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>farid@gmail.com</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>Dhaka</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <span>Dhaka</span>
                                        </td>
                                        <td scope='col' className='py-1 px-4 font-medium whitespace-nowrap'>
                                            <div className='flex justify-start items-center gap-4'>
                                                <Link className='p-[6px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50'><FaEye /></Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                <div className='w-full flex justify-end mt-5 bottom-4 right-4'>
                    <Pagination
                        pageNumber={currentPage}
                        setPageNumber={setCurrentPage}
                        totalItem={50}
                        parPage={parPage}
                        showItem={3}
                    />
                </div>
            </div>
        </div>
    )
}

export default Sellers