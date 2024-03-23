import React, { useEffect, useState } from 'react'
import { ContactHandler } from '../../api/api'
import { Send } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
    useEffect(() => {
        document.title = 'Contact Us'
    })
    const [ContactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setContactFormData({ ...ContactFormData, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!ContactFormData.name || !ContactFormData.name || !ContactFormData.name || !ContactFormData.name) {
            toast.warning("All Fields Requried!",{
                position:"bottom-right"
            });

            return false
        }
        try {
            const response = await ContactHandler(ContactFormData);
            console.log(response);
            if (response.status === 200) {
                toast.info("Successfully Submited",  {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    
                    });

                setContactFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });

            }
        } catch (error) {
            console.error('Error submitting contact form:', error);
            toast.error('An error occurred. Please try again.');

        }
    };

    return (
        <div className="flex  items-center justify-center min-h-screen mt-5 shadow-lg">
            <div className="flex w-[900px] h-[500px] shadow-lg 3xl:w-[1200px] 3xl:h-[700px]">
                <div className="flex-1 flex flex-col items-center justify-center bg-cover bg-center rounded-l-lg 3xl:w-[400px]" style={{ backgroundImage: 'url(pcboi2.webp)' }}>
                    <h1 className='text-3xl text-white 3xl:text-5xl shadow-lg'>Contact Me</h1>

                </div>
                <div className="flex flex-col items-center justify-center bg-white rounded-r-lg w-[600px] 3xl:w-[800px] 3xl:text-xl">
                    <form className="flex flex-col items-center 3xl:text-2xl" onSubmit={handleSubmit}>
                        <h1 className='text-2xl mt-0 3xl:text-3xl'>Feel Free to Contact😊</h1>
                        <input
                            type="text"
                            placeholder="Your Name"
                            name="name"
                            onChange={handleChange}
                            value={ContactFormData.name}
                            className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2 text-sm 3xl:w-96 3xl:p-4 3xl:text-xl"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            onChange={handleChange}
                            value={ContactFormData.email}
                            className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2 3xl:w-96 3xl:p-4 text-sm 3xl:text-xl"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                            onChange={handleChange}
                            value={ContactFormData.subject}
                            className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2 3xl:w-96 3xl:p-4 text-sm 3xl:text-xl"
                        />
                        {/* <input
                            type="text"
                            placeholder="Message"
                            name="message"
                            onChange={handleChange}
                            value={ContactFormData.message}
                            className="outline-none border-none w-72 p-3 rounded bg-gray-200 my-2 3xl:w-96 3xl:p-4"
                        /> */}

                        <textarea name='message' onChange={handleChange} value={ContactFormData.message} rows="4" class="3xl:text-lg outline-none border-none w-72 p-3 rounded bg-gray-200 my-2 3xl:w-96 3xl:p-4 text-sm" placeholder="Write your thoughts here..."></textarea>
                        <button type="submit" onClick={handleSubmit} className="flex items-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white rounded-full py-3 px-6 mt-4 font-bold text-lg">
                            Send  <Send style={{ marginLeft: '6px' }} />
                        </button>
                    </form>

                    <ToastContainer/>

                </div>
            </div>
        </div>
    )
}

export default Contact