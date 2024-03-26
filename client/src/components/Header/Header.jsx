import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Linkedin, Instagram, Github, Facebook } from 'lucide-react';
import axios from 'axios';
import logo from '../../images/logo.png'
const Header = () => {
    const [isAuthenticated, setisAuthenticated] = useState(false);
    useEffect(()=>{
        setisAuthenticated(localStorage.getItem('token') ? true : false)
    })
    const handleLogout = async () => {
        await axios.get('http://localhost:8001/api/user/logout');
        localStorage.removeItem('token');
        setisAuthenticated(false);
    }
    return (


        <nav className="hidden sm:flex justify-between items-center my-4 fixed top-0 left-0 right-0">
            <img src={logo} alt="" className="sm:wd-24 w-52 mx-4" />
            <ul className="flex md:space-x-4 sm:space-x-2  text-gray-200 text-xl ">
                <li><NavLink className="cursor-pointer transform transition-transform hover:scale-110 hover:text-gray-400 select-none" to={'/'}>Home</NavLink></li>

                <li><NavLink className="cursor-pointer transform transition-transform hover:scale-110 hover:text-gray-400 select-none" to={'/about'} >
                    About</NavLink></li>

                <li>                <NavLink className="cursor-pointer transform transition-transform hover:scale-110 hover:text-gray-400 select-none" to={'/contact'}>
                    Contact</NavLink></li>

                <li><NavLink className="cursor-pointer transform transition-transform hover:scale-110 hover:text-gray-400 select-none" to={'/projects'}>
                    Projects</NavLink></li>
                <li><NavLink className="cursor-pointer transform transition-transform hover:scale-110 hover:text-gray-400 select-none" to={'/blogs'}>
                    Blogs</NavLink></li>
            </ul>
            <ul className="flex sm:space-x-2 md:space-x-4 mx-5 items-center ">
                <NavLink className="cursor-pointer transform transition-transform hover:scale-125 " to={'https://www.linkedin.com/in/asharma73/'} target='_blank' >
                    <Linkedin color="#fff" />
                </NavLink>
            
                <NavLink className="cursor-pointer transform transition-transform hover:scale-125" to={'https://www.instagram.com/dev.ash3'} target='_blank'>
                    <Instagram color='#ff00ae' />
                </NavLink>
            
                <NavLink className="cursor-pointer transform transition-transform hover:scale-125" to={'https://github.com/Tech-Xposer/'} target="_blank">
                    <Github color='#E6EDF3' />
                </NavLink>
            
                <NavLink className="cursor-pointer transform transition-transform hover:scale-125">
                    <Facebook color="#0A66C2" />
                </NavLink>
            
                <li>
                    {
                        isAuthenticated ? <NavLink to={'/login'} className=
                            'text-gray-100 border border-white px-5 py-1 rounded-lg hover:text-gray-400 hover:border-gray-400 select-none' onClick={handleLogout}>Logout</NavLink> :
                            <NavLink to={'/login'} className={({ isActive }) =>
                                `${isActive ? 'text-gray-400' : 'text-gray-100'}   border-2 border-white px-5 py-1 rounded-lg hover:text-gray-400 hover:border-gray-400 select-none`
                            }>Login</NavLink>
                    }
                </li>


            </ul>

        </nav>
    )
}

export default Header