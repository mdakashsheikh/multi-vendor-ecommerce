import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../components/Search';
import Pagination from '../Pagination';

const Oders = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchValue, setSearchValue] = useState('');
    const [parPage, setParpage] = useState(5)
    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <Search
                    setParpage={setParpage} 
                    setSearchValue={setSearchValue} 
                    searchValue={searchValue}
                />

<div className='relative overflow-x-auto '>
                    <table className='w-full text-sm text-left text-[#d0d2d6]'>
                        <thead className='text-sm text-[#d0d2d6] uppercase border-b border-slate-700'>
                            <tr>
                                <th scope='col' className='py-3 px-4'>Order Id</th>
                                <th scope='col' className='py-3 px-4'>Price</th>
                                <th scope='col' className='py-3 px-4'>Payment Status</th>
                                <th scope='col' className='py-3 px-4'>Order Status</th>
                                <th scope='col' className='py-3 px-4'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [1, 2, 3, 4, 5].map((d, i) => (
                                    <tr>
                                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>#545d87d7f8d7f</td>
                                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>$654</td>
                                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>Pending</span>
                                        </td>
                                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <span>Pending</span>
                                        </td>
                                        <td scope='col' className='py-3 px-4 font-medium whitespace-nowrap'>
                                            <Link className='p-[6px] w-[35px] bg-green-500 rounded hover:shadow-lg hover:shadow-green-500/50 flex justify-center items-center'><FaEye /></Link>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
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
    )
}

export default Oders