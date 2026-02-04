import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import { Outlet } from 'react-router-dom'

const Parentroute = () => {
  return (
    <div style={{display:"flex" , justifyContent:"space-between" , alignItems:"center"}}>
        <Sidenav/>
        <div style={{height:"100vh " , width:"100%"}} >
            <Navbar/>
            <div>
               <h1>This is the body</h1>
               <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Parentroute