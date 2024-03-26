import React, { useLayoutEffect, useState } from 'react'
import SideNavbar from '../Sidebar/Sidebar'
import { Outlet, redirect } from 'react-router-dom'
import { doLogin, getToken } from '../../auth/auth'

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
  const end_point = process.env.REACT_APP_ENV === 'dev' ?'http://localhost:8001/api' : 'https://codewithash.onrender.com/api'
  const token = getToken()
  if (!token) {
    throw redirect('/login');
  }
  const res = await fetch(`${end_point}/user/getuser`, {
    headers: {
      'authorization': `Bearer ${token}`
    }
  })
  const user = await res.json()
  localStorage.setItem('role', user.role)
  localStorage.setItem('user_name', user.name)
  doLogin(user)

  if (token && user.role === 'admin') {
    return true;
  }
  throw redirect('/login');
}