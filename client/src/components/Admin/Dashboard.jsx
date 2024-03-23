import React, { useLayoutEffect, useState } from 'react'
import SideNavbar from '../Sidebar/Sidebar'
import { Outlet, redirect } from 'react-router-dom'

const Dashboard = () => {
  useLayoutEffect(() => {
    document.body.style.background = 'none'
  })
  return (
    <div className='flex flex-row justify-between'>
      <div className=''><SideNavbar /></div>
      <div className='w-full'>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard

export const fetchUser = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    throw redirect('/login');
  }
  const res = await fetch('http://localhost:8001/api/user/getuser', {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  const user = await res.json()
  localStorage.setItem('role', user.role)
  localStorage.setItem('user_name', user.name)


  if (token && user.role === 'admin') {
    return true;
  }
  throw redirect('/login');
}