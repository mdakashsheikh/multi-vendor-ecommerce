import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Sidebar from './Sidebar'
export default function MainLayout() {
    return (
        <div className='bg-[#161d31] w-full min-h-screen'>
            <Header/>
            <Sidebar/>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}
