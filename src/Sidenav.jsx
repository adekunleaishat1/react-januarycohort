import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div style={{height:"100vh", backgroundColor:"blue", width:"200px", padding:"10px 15px"}}>
        <div>
            <ul className='p-4'>
                <li>Dashboard</li>
                <li>
                    <Link to={"/parent/profile"}>Profile</Link>
                </li>
                <li><Link to={"/parent/resources"}>Resouces</Link></li>
                <li>Change Password</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidenav