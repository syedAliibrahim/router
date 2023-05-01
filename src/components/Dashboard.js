import React from 'react'
import { Link, Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>


          <Link to="teacher">teacher</Link>
          <Link to="student">student</Link>
          <Link to="classRoom">classRoomm</Link>
        <Outlet/>
        
    </div>
  )
}

export default Dashboard