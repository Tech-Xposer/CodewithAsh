import React from 'react'
import { Pencil, Trash2 } from 'lucide-react'

const Card = ({blog}) => {
    return (
        <div className='text-black flex m-8 items-center gap-x-5' key={blog._id}>
            <section>
                <img src={`http://localhost:8001/uploads/${blog.createdBy}/${blog.imageUrl}`} alt="" className='w-40' />
            </section>
            <section>
                <div className='flex gap-x-5 items-center'>
                    <h1>{blog.title}</h1>
                    <Pencil color="#28f000" />
                    <Trash2 color="#ff0000" />
                </div>
                <div>
                    <p className='text-sm mt-0'>{blog.metadescription}</p>
                </div>
            </section>
        </div>
    )
}

export default Card