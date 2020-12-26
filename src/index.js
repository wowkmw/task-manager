const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => console.log(`Server is up on port ${port}`));

// const bcrypt = require('bcrypt');

// const myFunc = async () => {
//     const password = 'Rfe123#gg';
//     const hashedpassword = await bcrypt.hash(password, 8);
//     console.log(password);
//     console.log(hashedpassword);

//     const ismatch = await bcrypt.compare(password, hashedpassword);
//     console.log(ismatch);
// };

// myFunc();