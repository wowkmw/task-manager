require('../src/db/mongoose.js');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('5fb777d669209b08a888566b').then(() => {
//     return Task.countDocuments({
//         completed: true
//     });
// }).then(num => console.log(num)).catch(e => console.log(e));

const deleteandCount = async (id) => {
    await Task.findByIdAndDelete(id);
    return await Task.countDocuments({
        completed: true
    });
};

deleteandCount('5fb5f8a70cb86f2c30cb26f9').then(c => console.log('count: ' + c)).catch(e => console.log(e));