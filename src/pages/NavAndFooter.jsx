import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import HeaderComp from '../components/HeaderComp'

function NavAndFooter() {
  return (
    <>
      <HeaderComp />
      <Outlet />
      <Footer />
    </>
  )
}

export default NavAndFooter
