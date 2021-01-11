const tick = Date.now();
const log = (v) => console.log(`${v} \nElapsed: ${Date.now() - tick}ms`);

async function superloop() {
    const myfunc = () => {
        let i = 0;
        while (i < 2000000000) {
            i++;
        }
        return ('done looping');
    };
    return (myfunc());
}

console.log('sync 1');
superloop().then(t => log(t));
console.log('sync 2');