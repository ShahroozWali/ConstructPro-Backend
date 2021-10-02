const express = require('express');
const app = express();
const server = require('http').createServer(app);
require('dotenv').config()
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*',);
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/', (req, res) => {
    res.send({ message: 'ALHAMDULILLAH' });
});


// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection

db.once('open', _ => {
    console.log('Database connected:', process.env.MONGO_URL)
})

db.on('error', err => {
    console.error('connection error:', process.env.MONGO_URL)
})


// MODELS
require('./Models/users');

// ROUTES IMPORTS
const usersRoutes = require('./Routes/usersRoutes');
app.use(usersRoutes);

const authRoutes = require('./Routes/authRoutes');
app.use(authRoutes)


//START SERVER
server.listen(process.env.PORT, () => {
    console.log(`Server Connected at port: ${process.env.PORT}`);
});


