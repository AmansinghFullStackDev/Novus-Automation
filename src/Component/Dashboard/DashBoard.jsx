import React from 'react'
import MainHeader from './MainHeader'
import DashboardLayout from './Sidebar.js'

const DashBoard = () => {
    return (
        <div className='h-screen'>
            <div className=''>
                <DashboardLayout />
            </div>
            <div className=''>
                {/* <MainHeader /> */}
            </div>

        </div>
    )
}

export default DashBoard