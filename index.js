const express = require('express');
const userRouter = require('./server/routes/user');
const noteRouter = require('./server/routes/note');

const app = express();
app.use(express.json());

// CORS middleware
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, Options');
    next();
});

app.use('/user', userRouter);
app.use('/note', noteRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server started in port ${PORT}`));