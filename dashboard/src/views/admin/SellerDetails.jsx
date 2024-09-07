import React from 'react'

const SellerDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#283046] rounded-md'>
                <div className='w-full flex flex-wrap text-[#d0d2d6]'>
                    <div className='w-3/12 flex justify-center items-center py-3'>
                        <div>
                            <img  
                                className='w-full h-[230px] '
                                src='http://localhost:5173/images/admin.jpg' 
                                alt=''
                            />
                        </div>

                        <div className='w-4/12'>
                            <div className='px-0 md:px-5 py-2'>
                                <div className='py-2 text-lg'>
                                    <h2>Basic Info</h2>
                                </div>
                                <div className='w-64 flex justify-between text-sm flex-col gap-2 p-4 bg-slate-800 rounded-md'>
                                    <div className='flex gap-2'>
                                        <span>Name : </span>
                                        <span>Sheikh Farid</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Email : </span>
                                        <span>farid@gmail.com</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Role : </span>
                                        <span>Seller</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Status : </span>
                                        <span>Pending</span>
                                    </div>
                                    <div className='flex gap-2'>
                                        <span>Payment Account : </span>
                                        <span>active</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellerDetails