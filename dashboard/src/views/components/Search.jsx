import React from 'react'

const Search = ({ setParPage, setSearchValue, searchValue }) => {
    return (
        <div className='flex justify-between items-center'>
            <select 
                className='px-4 py-2 hover:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
                onChange={(e) => setParPage(parseInt(e.target.value))}
            >
                <option value='5'>5</option>
                <option value='15'>15</option>
                <option value='25'>25</option>
            </select>
            <input
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
                type='text'
                placeholder='search'
                className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#283046] border border-slate-700 rounded-md text-[#d0d2d6]'
            />
        </div>
    )
}

export default Search