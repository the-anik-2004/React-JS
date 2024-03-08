import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}

/**OUTLET:Outlet function or component used to dynamically arrange the data upon the provided component using them as a base */
export default Layout
