import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../../api/api'
import Card from './Card'
const Blog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('http://localhost:8001/api/blogs').
            then(res => {
                return res.json()
            }).then((data) => {
                setBlogs(data.data)
            })
    }, [])
    return (
        <>
            <h1 className='text-center'>All Blogs</h1>
            {
                blogs.map(blog => {
                    return <Card blog={blog} key={blog._id} />
                })
            }
        </>
    )
}

export default Blog