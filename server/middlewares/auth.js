const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel');
const { loginUser } = require('../controllers/userController');

const restrict = async (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        if (!token || !token.startsWith('Bearer')) {
            throw new Error('Unauthorized');
        }
        const {uid} = jwt.verify(token.split(' ')[1], process.env.SECRET_KEY);
        const user = await userModel.findById(uid).select('name email role');
        req.user = user;
        next();
    } catch (error) {
        console.error('Authentication failed:', error);
        res.status(401).json({ status: 'FAILED', message: error.message });
    }
};

const restrictTo=(roles = [])=>{
    return (req, res, next) => {
        console.log(req.user);

        if (req.user.role && roles.includes(req.user.role)) {
            next();
        } else {
            res.status(401).json({ status: 'FAILED', message: 'Unauthorized' });
        }
    };
}
    module.exports = { restrict, restrictTo };

