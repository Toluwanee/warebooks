import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

const Layout = () => {
  return (
    <div>
        <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
        <Sidebar/>
        <div className='flex-1'>
          <Header/>
          
          <div className='p-2 mt-10'>{<Outlet/>}</div>
        </div>   
    </div>
    </div>
     
  )
}

 export default Layout