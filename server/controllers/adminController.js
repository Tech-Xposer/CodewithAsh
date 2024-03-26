const Contact = require('../models/contactModel')
const Blog = require('../models/blogModel');
const fs = require('fs')
const getMessages = async (req, res) => {
    try {
        const contacts = await Contact.find({}).sort({ date: -1 })
        return res.status(200).json({
            status: "SUCCESS",
            data: contacts
        })
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const getMessage = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params._id)
        return res.status(200).json({
            status: "SUCCESS",
            data: contact
        })
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const deleteMessage = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params._id)
        return res.status(200).json({
            status: "SUCCESS",
            data: contact
        })
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
const deleteBlog = async (req, res) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params._id)
        const {createdBy} = blog
        const {imageUrl} = blog
        fs.rmSync(`./public/uploads/${createdBy}/${imageUrl}`, { recursive: true, force: true })
        return res.status(200).json({
            status: "SUCCESS",
            data: blog
        })
    } catch (error) {
        console.error('Error creating blog post:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
module.exports = { getMessages, getMessage, deleteMessage, deleteBlog }