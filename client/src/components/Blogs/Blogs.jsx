import React, { useEffect, useState } from 'react';
import { getBlogs } from '../../api/api';
import BlogCard from './BlogCard';

const Blogs = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await getBlogs();
                console.log(res);
                setData(res.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div className='text-white text-3xl text-center flex items-center justify-center h-screen'>Error: {error}</div>;
    }

    return (
        <div className='m-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 '>
            {data.map(blog => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
    );
};

export default Blogs;
