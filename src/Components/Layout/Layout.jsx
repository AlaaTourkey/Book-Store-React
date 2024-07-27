import React from 'react'
import Style from './Layout.module.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Layout() {
  return (
    <>
      <Navbar />
      <div className="container w-3/4 m-auto">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Layout
