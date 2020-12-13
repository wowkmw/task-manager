const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.get('/users', async (req, res) => {
    try {
        res.send(await User.find({}));
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOp = updates.every(item => allowedUpdates.includes(item));
    if (!isValidOp) {
        return res.status(400).send({
            Error: 'invalid update params'
        });
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!user) {
            return res.send.status(404).send();
        }
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();
        res.status(201).send(task);
    } catch (e) {
        res.status(400).send(e);
    }
    // const task = new Task(req.body);
    // task.save().then(r => res.status(201).send(r)).catch(e => res.status(400).send(e));
});

app.get('/tasks', async (req, res) => {
    try {
        res.send(await Task.find({}));
    } catch (e) {
        res.status(500).send(e);
    }
});

app.get('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).send();
        }
        res.status(200).send(task);
    } catch (e) {
        res.status(500).send(e);
    }
});

app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['description', 'completed'];
    const isValidOp = updates.every(item => allowedUpdates.includes(item));
    if (!isValidOp) {
        return res.status(400).send({
            Error: 'invalid update params'
        });
    }
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        if (!task) {
            return res.send.status(404).send();
        }
        res.send(task);
    } catch (e) {
        res.status(400).send(e);
    }
});

app.listen(port, () => console.log(`Server is up on port ${port}`));