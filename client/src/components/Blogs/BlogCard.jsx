import React from 'react';
import { BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  const { blog } = props;
  const end_point = process.env.REACT_APP_ENV === 'dev' ?'http://localhost:8001' : 'https://codewithash.onrender.com'

  const imageSrc = `${end_point}/uploads/${blog.createdBy._id}/${blog.imageUrl}`;

  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" alt="" src={imageSrc} />
      <div className="p-5">
        <h5 className="mb-2 text-xl tracking-tight text-gray-900">{blog.title}</h5>
        {/* <p className="mb-3 font-normal text-gray-700">{blog.content.split(' ').slice(0, 20).join(' ')}</p> */}
        <p className="mb-3 font-normal text-gray-700">{blog.createdBy.name}</p>
        <Link to={`/blogs/${blog._id}`} className="flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          View
          <BookText style={{ marginLeft: '5px' }} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
