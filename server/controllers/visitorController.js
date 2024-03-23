const contactModel = require("../models/contactModel");


const contactHandler = async (req,res)=>{
    const {name, email, subject, message} = req.body;
    if(!name || !email || !subject || !message) {
        return res.status(400).json({
            status: "FAILED",
            message: "All fields required!"
        });
    }
    try {
        await contactModel.create({name, email, subject, message})
        return res.status(200).json({
            status: "SUCCESS",
            message: "Message sent successfully!"
        });
         
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            status: "FAILED",
            message: error.message
        });
    }
}


module.exports = {contactHandler}