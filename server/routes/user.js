const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/getAllUsers', (req, res) => {
    try {
        const users = User.getAllUsers();
        res.send(users);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.post('/login', async (req, res) => {
    try {
        const user = await User.login(req.body);
        res.send({ ...user, password: undefined });
    } catch (err) {
        res.status(403).send({ error: err.message });
    }

})

.post('/createUser', async (req, res) => {
    try {

        console.log('userss');
        console.log(req.body);

        const user = await User.createUser(req.body);
        res.send({ ...user, password: undefined });
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.put('/editUser', async (req, res) => {
    try {
        const user = await  User.editUser(req.body);
        res.send(user);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.get('/getUser', async (req, res) => {
    try {
        const user = await User.getUser(req.body);
        res.send(user);
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

.delete('/deleteUser', async (req, res) => {
    try {
        await User.deleteUser(req.body);
        res.send({ success: "User is deleted successfully!" });
    } catch (err) {
        res.status(401).send({ message: err.message });
    }
})

module.exports = router;