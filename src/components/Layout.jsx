import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
            <div>
                <Header />
                <div className='mx-auto w-full overflow-auto'>
                    <div className='flex'>
                        <div className='w-full '>
                            <div><Outlet /></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default Layout
