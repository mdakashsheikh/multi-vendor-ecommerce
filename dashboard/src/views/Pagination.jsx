import React from 'react'
import { BsChevronDoubleLeft } from 'react-icons/bs';

const Pagination = ({ pageNumber, setPageNumber, totalItem, parPage, showItem }) => {
    let totalPage = Math.ceil(totalItem / parPage)
    let startPage = pageNumber;
    let dif = totalPage - pageNumber;

    if(dif <= showItem) {
        startPage = totalPage - showItem;
    }
    let endPage = startPage < 0 ? showItem : showItem + startPage

    if(startPage <= 0) {
        startPage = 1
    }
    const createButton = () => {

    }

    return (
        <ul className='flex gap-3'>
            {
                pageNumber > 1  && <li className='w-[33px] h-[33px] rounded-full flex justify-center items-center bg-slate-700 text-[#d0d2d6] cursor-pointer'>
                    <BsChevronDoubleLeft/>
                </li>
            }
        </ul>
    )
}

export default Pagination