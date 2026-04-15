import React from 'react'
import { Outlet } from 'react-router'
import Navber from '../ShareComponent/Navber'
import Footer from '../ShareComponent/Footer'

const Root = () => {
  return (
    <div>
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root
