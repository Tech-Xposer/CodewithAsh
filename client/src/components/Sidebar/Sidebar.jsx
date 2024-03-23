import React from 'react'
import { Sidebar } from 'flowbite-react'
import { Mail, LogOut, Home, FolderKanban, User, ClipboardPlus } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const SideNavbar = () => {
  return (
    <>
      <Sidebar className='h-screen'>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <NavLink to={'/admin'}>
              <Sidebar.Item icon={Home}>
                Home
              </Sidebar.Item>
            </NavLink>
            <NavLink to={'/admin/blog'}>
              <Sidebar.Item href="#" icon={ClipboardPlus} labelColor="dark">
                Blogs
              </Sidebar.Item>
            </NavLink>
            <NavLink to={'/admin/messages'}>
              <Sidebar.Item href="#" icon={Mail} >
                Messages
              </Sidebar.Item>
            </NavLink>
            <NavLink>
              <Sidebar.Item href="#" icon={User}>
                Me
              </Sidebar.Item>
            </NavLink>
            <NavLink>
              <Sidebar.Item href="#" icon={FolderKanban}>
                Projects
              </Sidebar.Item>
            </NavLink>

            <Sidebar.Item href="#" icon={LogOut}>
              Logout
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  )
}

export default SideNavbar