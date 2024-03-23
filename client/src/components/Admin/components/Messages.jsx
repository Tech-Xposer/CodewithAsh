import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MessageCard from './MessageCard';
const Messages = () => {
    const messages = useLoaderData()

    return (
        <>
            <h1 className='text-center'>All Blogs</h1>

            {messages.data.map(message => {
                return <MessageCard message={message} key={message._id} />
            })}
        </>
    )
}

export default Messages

export const fetchMessage = async () => {
    const res = await fetch('http://localhost:8001/api/admin/messages',
        {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        }
    )
    return await res.json()
}