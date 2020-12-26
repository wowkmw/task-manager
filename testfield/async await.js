function add(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            return reject(new Error('input is not a number'));
        }
        setTimeout(() => {
            console.log('1 s');
            console.log(a + b);
            resolve(a + b);
        }, 1000);
        console.log('processing...');
    });
}

//async function always return a promise
const dowork = async () => {
    return await add(1, await add(2, await add(3, 4))); //with async await, user no longer need to use callback and return each time like in the promise chaining
};
dowork().then(res => console.log('res: ' + res)).catch(e => console.log(e));