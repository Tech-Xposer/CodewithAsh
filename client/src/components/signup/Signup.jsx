import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signUp } from '../../api/api';
import { ToastContainer } from 'react-toastify'
const Signup = () => {
  useEffect(() => {
    document.title = 'Signup';
  });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    signUp(formData)
  };

  const error = '';

  return (
    <div className="flex  items-center justify-center min-h-screen mt-3 no-scrollbar">
      <div className="flex w-[900px] h-[500px] rounded-lg shadow-lg">
        <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-blue-700 via-purple-600 to-pink-500  rounded-l-lg">
          <h1 className="text-2xl mt-0 text-white">Welcome Back</h1>
          <Link to="/login">
            <button type="button" className="bg-white text-black rounded-full py-3 px-6 font-bold text-lg mt-4">
              Sign In
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center bg-white rounded-r-lg w-[600px]">
          <form className="flex flex-col items-center">
            <h1 className="text-2xl mt-0">Create Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={formData.firstName}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
            />
            <input
              type="tel"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
              value={formData.lastName}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              required
              className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2"
            />
            <button type="submit" onClick={handleSubmit} className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full py-3 px-6 mt-4 font-bold text-lg">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;