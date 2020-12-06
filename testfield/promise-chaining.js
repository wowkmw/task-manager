require('../src/db/mongoose.js');
const User = require('../src/models/user');

// User.findByIdAndUpdate('5fb76fe415181c3e7c9a9638', {
//     age: 17
// }).then(user => {
//     console.log(user);
//     return User.countDocuments({
//         age: 17
//     });
// }).then(num => console.log(num)).catch(e => console.log(e));

async function updateAgeandCount(id, age) {
    await User.findByIdAndUpdate(id, {
        age
    });
    const count = await User.countDocuments({
        age
    });
    return count;
}

updateAgeandCount('5fb76fe415181c3e7c9a9638', 13).then(count => console.log('count: ' + count)).catch(e => console.log(e));