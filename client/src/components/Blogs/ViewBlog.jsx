import React, { useEffect, useState } from 'react';
import { useParams, useLoaderData } from 'react-router-dom';
import { BookOpen } from 'lucide-react'
import './blog.css';
const ViewBlog = () => {
  const blog = useLoaderData();

  if (!blog) {
    return <div className='text-center mt-20 m-10 rounded-xl h-screen'>
      <h1 className='text-white'>Page Not Found...</h1>
    </div>;

  }
  const end_point = process.env.REACT_APP_ENV === 'dev' ?'http://localhost:8001' : 'https://codewithash.onrender.com'
  const imageSrc = `${end_point}/uploads/${blog.createdBy._id}/${blog.imageUrl}`;
  const authorName = blog.createdBy.name 
  return (
    <div className='justify-center mt-20 bg-white m-10 rounded-xl'>
      <h1 className='text-4xl text-black text-center font-bold mt-8'>{blog.title}</h1>
      <div className='flex justify-center items-center pt-12'>
        {blog.imageUrl && <img src={imageSrc} alt="" className='w-1/2 h-1/2 rounded-xl shadow-xl' />}
      </div>
      <section className='text-center flex justify-center m-3'>
        Posted By {authorName}, {blog.date.split('T')[0]}  <BookOpen /> {Math.trunc(blog.content.split(" ").length / 250)} min read
      </section>
      <div className='text-black p-10 text-justify' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>

  );
};

export default ViewBlog;
export const getBlog = async (_id) => {
  const end_point = process.env.REACT_APP_ENV === 'dev' ?'http://localhost:8001/api' : 'https://codewithash.onrender.com/api'
  const response = await fetch(`${end_point}/blogs/${_id}`);
  const data  = await response.json()
  return data.data
}
