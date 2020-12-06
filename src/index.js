const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then((r) => {
        res.status(201).send(r);
    }).catch(e => res.status(400).send(e));
});

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users);
    }).catch(e => res.status(500).send(e));
});

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    User.findById(id).then((user) => {
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    }).catch(e => res.status(500).send(e));
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then((r) => {
        res.status(201).send(r);
    }).catch(e => res.status(400).send(e));
});

app.get('/tasks', (req, res) => {
    Task.find({}).then((r) => {
        res.status(200).send(r);
    }).catch(e => res.status(500).send(e));
});

//promise then catch version
app.get('/tasks/:id', (req, res) => {
    Task.findById(req.params.id).then((r) => {
        if (!r) {
            return res.status(404).send();
        }
        res.status(200).send(r);
    }).catch(e => res.status(500).send(e));
});


app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});