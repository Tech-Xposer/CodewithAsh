import React from 'react';
import { BookText } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogCard = (props) => {
  const { blog } = props;
  const imageSrc = `http://localhost:8001/uploads/${blog.createdBy}/${blog.imageUrl}`;

  return (
    <div className="max-w-[250px] bg-white border border-gray-200 rounded-lg shadow">
      <img className="rounded-t-lg" alt="" src={imageSrc} />
      <div className="p-5">
        <h5 className="mb-2 text-xl tracking-tight text-gray-900">{blog.title}</h5>
        <Link to={`/blogs/${blog._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          View
          <BookText style={{ marginLeft: '5px' }} />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
