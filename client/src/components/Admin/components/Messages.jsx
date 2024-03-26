import React, { useEffect, useState } from 'react';
import MessageCard from './MessageCard';

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:8001/api/admin/messages', {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data = await response.json();
                setMessages(data.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
                
            }
        };
        
        fetchMessages();
    }, []);

    // useEffect(() => {
    //     console.log(messages);
    // }, [messages]);

    return (
        <>
            <h1 className='text-center'>All Messages</h1>
            {messages.map(message => (
                <MessageCard message={message} key={message._id} />
            ))}
        </>
    );
};

export default Messages;
