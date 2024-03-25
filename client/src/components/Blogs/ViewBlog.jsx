import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BookOpen } from 'lucide-react'
import './blog.css';
const ViewBlog = () => {


  const { _id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8001/api/blogs/${_id}`);
        const data = await response.json()
  
        setBlog(data.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [_id]);
  const imageSrc = `https://codewithash.onrender.com/uploads/${blog.createdBy._id}/${blog.imageUrl}`;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className='text-white text-3xl text-center flex items-center justify-center h-screen'>Error: {error}</div>;
  }
  return (
    <div className=' justify-center mt-20 bg-white m-10 rounded-xl '>

      <h1 className='text-4xl text-black text-center font-bold mt-8'>{blog.title}</h1>

      <div className='flex justify-center items-center pt-12 '>
        {blog.imageUrl && <img src={imageSrc} alt="" className='w-1/2 h-1/2 rounded-xl shadow-xl' />}
      </div>
      <section className='text-center flex justify-center m-3'>Posted By {blog.createdBy.name}, {blog.date.split('T')[0]}  <BookOpen /> {Math.trunc(blog.content.split(" ").length / 250)} min read</section>
      <div className=' text-black p-10 text-justify' dangerouslySetInnerHTML={{ __html: blog.content }}></div>
    </div>
  );
};

export default ViewBlog;
export const getBlog = async (_id) => {

  const response = await fetch(`http://localhost:8001/api/blogs/${_id}`);
  const data = await response.json()
  return data
}
