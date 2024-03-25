// importing required modules
require('dotenv').config({ path: `./config/.env.${process.env.NODE_ENV}` })
const express = require('express')
const cors = require('cors')
const fs = require('fs')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 3000
const userRoute = require('./routes/user')
const visitorRoute = require('./routes/visitor')
const blogRoute = require('./routes/blogs')
const morgan = require('morgan')
// creating express app
const app = express()

//connect to MongoDB
connectDB()

//using middlewares
app.use(cors(
    {
        origin: 'http://localhost:3000',
        credentials: true
    }
));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'))

//set static folder
app.use(express.static('public'))

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

//logs
app.use((req, res, next) => {
    const d = new Date();
    fs.writeFile('access.log', `${req.method} ${req.url} ${d.toLocaleDateString()} ${d.toLocaleTimeString()} ${req.user ? req.user : ''}\n`, { flag: 'a' }, (err) => {
        if (err) throw err
    })
    next()
})

//public routes
app.use('/api/user', userRoute)
app.use('/api', visitorRoute)
app.use('/api/blogs', blogRoute)

app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(err.status || 500).json({
      success: false,
      message: err.message || 'Internal Server Error'
    });
  });

//private routes
app.use('/api/admin', require('./routes/admin'));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to CodeWithAsh' })
})

const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
});

// server.on('listening', () => {
//     console.log(`Server listening on port ${server.address().port}`);
// });