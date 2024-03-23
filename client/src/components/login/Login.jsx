import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { signIn } from '../../api/api'
import {toast, ToastContainer} from 'react-toastify'
import { useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    document.title = 'Login'
  }, [])

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(formData.email === '' || formData.password === '') {
      return toast('Please Enter Credentials!')
    }
    const res = await signIn(formData)
    if (res) {
      toast.success('Logged In Successfully');
      localStorage.setItem('token', res.token)
      setFormData({
        email: '',
        password: ''
      })
      navigate('/blogs')
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-3">
      <div className="flex w-[900px] h-[500px] rounded-lg shadow-lg">
        <div className="flex flex-col items-center justify-center bg-white rounded-l-lg w-[600px]">
          <form className="flex flex-col items-center">
            <h1 className="text-2xl mt-0">Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
              onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit} className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full py-3 px-6 mt-4 font-bold text-lg"> 
              Sign In
            </button>
          </form>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-r-lg">
          <h1 className="text-2xl mt-0 text-white">New Here ?</h1>
          <Link to="/signup">
            <button type="button" className="bg-white text-black rounded-full py-3 px-6 font-bold text-lg mt-4">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Login
