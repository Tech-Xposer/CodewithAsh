const userModel = require("../models/userModel");
const jwt = require('jsonwebtoken');
const sendEmail = require("../services/nodeMailer");

const createUser = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;
        console.log(req.body);
        if (!name || !email || !password || !phone) {
            return res.status(400).json({
                status: "FAILED",
                message: "All fields required!"
            });
        }

        // Check if user is already registered
        const checkUser = await userModel.findOne({ email });
        if (checkUser) {
            return res.status(400).json({
                status: "FAILED",
                message: "User already registered!"
            });
        }

        const user = await userModel.create({ name, email, password, phone });

        console.log(user);
        const token = await jwt.sign(
            { userId: user._id },
            process.env.SECRET_KEY,
            { expiresIn: '10m' }
        );

        const verificationLink = process.env.NODE_ENV==='dev'?`${process.env.HOST_DEV}:${process.env.PORT}/api/user/verify/${user._id}/${token}`:`${process.env.HOST_PROD}/user/verify/${user._id}/${token}`
        const mailContent = {
            subject: 'Email Verification | CodeWithAsh',
            text: 'Please verify your email address with the link below.',
            content: `
                    <h2>Greetings of the day!</h2>
                    <p><b>Dear ${user.name}, </br> Please verify your email address by clicking <a href='${verificationLink}'>here</a>.</b></p>
                    <p><strong>Caution:</strong> Please do not share this email with anyone for security reasons. This link is unique to your account and should not be shared.</p>
                    <p>If you did not register for an account with us, please ignore this email.</p>
                    <p><h3>Thanks,</h3><h3>Team CWA</h3></p>
                `
        };
        await sendEmail(user.email, mailContent);
        return res.status(201).json({
            status:'SUCCESS',
            message:'user created successfully',
            verificationLink,
        });

    } catch (error) {
        return res.status(500).json('Internal Server Error: ' + error.message);
    }
};

const verifyUser = async (req, res) => {
    try {
        const { _id, token } = req.params;
        const { userId } = await jwt.verify(token, process.env.SECRET_KEY);
        if (userId && userId === _id) {
            //if user is already verified
            const user = await userModel.findById(_id);
            if (user.isVerified) {
                throw new Error('User already verified')
            }
            user.isVerified = true
            await user.save();
            return res.status(200).json({
                status: "SUCCESS",
                message: "User verified successfully",
            });
        }
        throw new Error('Invalid user');
    } catch (error) {
        return res.status(500).json({
            status: "FAILED",
            message: error.message
        });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error('Email and password required!')
        }

        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(404).json({
                status: "FAILED",
                message: "User not found!"
            });
        }
        if (!user.isVerified) {
            return res.status(401).json({
                status: "FAILED",
                message: "User not Verified!"
            });
        }

        if (!userModel.matchUserPassword(user, password)) {
            return res.status(400).json({
                status: "FAILED",
                message: "Password incorrect!"
            });
        }

        const token = jwt.sign({
            uid: user._id,
        }, process.env.SECRET_KEY, { expiresIn: '1d' });

        // Set token as a cookie
        // res.cookie('token', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });

        return res.status(200).json({
            status: 'SUCCESSFULL',
            token: token
        });

    } catch (error) {
        return res.status(500).json({ erorr: error.message });
    }
};
const fetchUser = async (req, res) => {
    try {
        const uid  = req.user
        const user = await userModel.findById(uid).select('name email role')
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}
const handleLogout = async (req, res) => {
    res.cookie('token', '', { maxAge: 0 });
    return res.status(200).json({
        status: "SUCCESS",
        message: "User logged out successfully"
    })
}

module.exports = { createUser, verifyUser, loginUser, handleLogout, fetchUser };