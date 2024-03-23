import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useLocation } from 'react-router-dom'

const Layout = () => {
    let location = useLocation()
    const isAdminPage = location.pathname.includes('admin')
    return (
        <>
            {!isAdminPage && <Header />}
            <Outlet />
            {!isAdminPage && <Footer />}

        </>
    )
}

export default Layout