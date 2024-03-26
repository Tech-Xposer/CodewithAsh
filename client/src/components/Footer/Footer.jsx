import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <footer className='text-center justify-center text-white   w-full bg-black/50  absolute'>
        <section>
          <img src={logo} alt="" className='w-52 m-10'/>
        </section>
        <section>

        </section>
        <h3>Ashutosh Sharma | Copyright &copy; 2023</h3>
    </footer>
  )
}

export default Footer

//bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500