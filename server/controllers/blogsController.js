const Blog = require('../models/blogModel');
const createBlog = async (req, res) => {
    try {
        const {_id} = req.user;
        const { title, content, permalink, metadescription } = req.body;
        if (!title || !permalink || !metadescription || !content) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        const newBlog = await Blog.create({
            title,
            content,
            permalink,
            metadescription,
            imageUrl: req.file.filename,
            createdBy: _id
        });

        res.status(201).json({
            status: "SUCCESSFULL",
            data: newBlog
        });
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

const getBlogs = async (req, res) => {
    try {

        const blogs = await Blog.find({}).sort({ date: -1 }).populate('createdBy', 'name')
        return res.status(200).json({
            status: "SUCCESS",
            data: blogs
        })
    } catch (error) {
        console.error('Error while fetching blogs:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

const getBlogsByUser = async (req, res) => {
    const {_id} = req.user
    const blogs = await Blog.find({ createdBy: _id }).sort({ date: -1 }).populate('createdBy', 'name')
    return res.status(200).json({
        status: "SUCCESS",
        data: blogs
    })
}
const getBlogByID = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params._id).populate('createdBy', 'name')
        return res.status(200).json({
            status: "SUCCESS",
            data: blog
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { createBlog, getBlogs, getBlogsByUser, getBlogByID}