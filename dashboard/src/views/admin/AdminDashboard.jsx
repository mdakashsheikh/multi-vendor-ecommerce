import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsCurrencyDollar } from 'react-icons/bs'
import { FaUsers } from 'react-icons/fa'
import { RiProductHuntLine } from 'react-icons/ri'
import Chart from 'react-apexcharts'

export default function AdminDashboard() {

    const state = {
        series: [
            {
                name: 'Orders',
                data: [34, 45, 12, 56, 75, 65, 70, 40, 59, 67, 61, 63] 
            },
            {
                name: 'Revenue',
                data: [40, 45, 20, 60, 75, 65, 45, 40, 59, 60, 66, 26] 
            },
            {
                name: 'Sellers',
                data: [65, 90, 54, 56, 70, 69, 60, 60, 39, 60, 41, 33] 
            },
        ],
        options: {
            color: ['#181ee8', '#181ee8', '#181ee8'],
            plotOptions: {
                radious: 30,
            },
            chart: {
                background: 'transparent',
                forColor: 'd0d2d6'
            },
            dataLabels: {
                enabled: false
            },
            store: {
                show: true,
                curve: ['smooth', 'straight', 'stepline'],
                lineCap: 'butt',
                colors: '#f0f0f0',
                width: .5,
                dashArray: 0
            },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apl', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            legend: {
                position: 'top'
            }
        }
    }

    return (
        <div className='px-2 md:px-7 py-5'>
            <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>$6566</h2>
                        <span className='text-md font-medium'>Total Sales</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#28c76f1f] flex justify-center items-center text-xl'>
                        <BsCurrencyDollar className='text-[#28c76f] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>20</h2>
                        <span className='text-md font-medium'>Products</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#e000e81f] flex justify-center items-center text-xl'>
                        <RiProductHuntLine className='text-[#cd00e8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>50</h2>
                        <span className='text-md font-medium'>Sellers</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#00cfe81f] flex justify-center items-center text-xl'>
                        <FaUsers className='text-[#00cfe8] shadow-lg'/>
                    </div>
                </div>
                <div className='flex justify-between items-center p-5 bg-[#283046] rounded-md gap-3'>
                    <div className='flex flex-col justify-start items-start text-[#d0d2d6]'>
                        <h2 className='text-3xl font-bold'>12</h2>
                        <span className='text-md font-medium'>Orders</span>
                    </div>
                    <div className='w-[46px] h-[47px] rounded-full bg-[#7367f01f] flex justify-center items-center text-xl'>
                        <AiOutlineShoppingCart className='text-[#7367f0] shadow-lg'/>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-wrap mt-7'>
                <div className='w-full lg:w-7/12 lg:pr-3'>
                    <div className='w-full bg-[#283046] p-4 rounded-md'>
                        <Chart options={state.options} series={state.series} type='bar' height={350}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
