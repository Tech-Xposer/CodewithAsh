import { toast } from 'react-toastify';
import axios from 'axios';

// const end_point = 'https://codewithash.onrender.com/api'
const end_point = process.env.REACT_APP_ENV === 'dev' ?'http://localhost:8001/api' : 'https://codewithash.onrender.com/api'
console.log(process.env.REACT_APP_ENV);


const signIn = async (user) => {
  try {
    const response = await fetch(`${end_point}/user/login`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(user)
      }
    )
    const data = await response.json()
    if (response.status === 200) {
      return data
    } else {
      return toast.error(data.message);
    }
  } catch (error) {
    console.error('Error occurred during login:', error);
    return toast.error(error.message)

  }
};

const signUp = async (formData) => {
  try {
    const response = await fetch(`${end_point}/user/register`,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(formData)
      }
    )
    const data = await response.json()
    if (response.status === 201) {
      return toast.success('Registerd Successfully');
    } else {
      return toast.error(data.message);
    }
  } catch (error) {
    console.error('Error occurred during sign up:', error);
  }
};

const ContactHandler = async (formData) => {
  try {
    const response = await axios.post(`${end_point}/contact`, formData);
    const { data } = response;
    return data;
  } catch (error) {
    console.error('Error occurred during contact submission:', error);
    throw new Error('Error submitting contact form. Please try again.');
  }
};

const getBlogs = async () => {
  try {
    const response = await axios.get(`${end_point}/blogs`);
    return await response.data;
  } catch (error) {
    console.error('Error occurred while fetching blogs:', error);
    throw new Error('Error fetching blogs. Please try again.');
  }
};

export { signIn, signUp, ContactHandler, getBlogs };
