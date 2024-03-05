import React from 'react'
import Header from './components/01 Header/Header'
import Footer from './components/02 Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
