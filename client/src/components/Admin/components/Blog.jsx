import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import Card from './Card';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBlogs();
    }, []);

    const fetchBlogs = async () => {
        try {
            const response = await fetch('http://localhost:8001/api/blogs');
            const data = await response.json();
            setBlogs(data.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching blogs:', error);
            setLoading(false);
        }
    };

    const token = localStorage.getItem('token');

    const deleteBlog = async (id) => {
        try {
            const response = await fetch(`http://localhost:8001/api/admin/blog/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
            });

            if (response.ok) {
                console.log('Blog deleted successfully');
                // Refresh blogs after deletion
                fetchBlogs();
            } else {
                console.error('Failed to delete blog:', await response.json());
            }
        } catch (error) {
            console.error('An error occurred during delete request:', error);
        }
    };

    return (
        <>
            <h1 className='text-center'>All Blogs</h1>
            {
                blogs.map(blog => {
                    return (
                        <div    className='flex m-10 items-center gap-x-5'>
                            <Card blog={blog} key={blog._id} />
                            <Pencil color="#28f000" />
                            <Trash2 color="#ff0000" onClick={() => deleteBlog(blog._id)} />
                        </div>
                    )
                })
            }
        </>
    )
}

export default Blog