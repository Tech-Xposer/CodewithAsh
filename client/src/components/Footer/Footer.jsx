import React from 'react'
import logo from '../../images/logo.png'

const Footer = () => {
  return (
    <footer className='text-center justify-center text-white bottom-0  w-full bg-black/50'>
        <section>
          <img src={logo} alt="" className='w-52 m-10'/>
        </section>
        <section>

        </section>
        <h1>Copyright &copy; 2023</h1>
    </footer>
  )
}

export default Footer

//bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500