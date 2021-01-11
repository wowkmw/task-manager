const express = require('express');
const mongoDB = require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

mongoDB.start();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));