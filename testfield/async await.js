async function add(a, b) {
    const myfunc = () => {
        if (typeof a !== "number" || typeof b !== "number") {
            throw new Error('input is not a number');
        }
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return (a + b);
    };
    return (myfunc());
}

//async function always return a promise
const dowork = async () => {
    return await add(1, await add(2, await add(3, 4))); //with async await, user no longer need to use callback and return each time like in the promise chaining
};
dowork().then(res => console.log('res: ' + res)).catch(e => console.log(e));