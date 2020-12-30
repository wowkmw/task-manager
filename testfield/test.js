let arr = [1, 2, 2, 2, 3, 3, 3, 4, 6, 7, 7, 7];
let unique = [];
let unique2 = [];

arr.forEach(e => {
    if (!unique.includes(e)) {
        unique.push(e);
    }
});

let arr2 = [...arr];

unique.forEach(e => {
    const a = arr2.indexOf(e);
    arr2.splice(a, 1);
});

arr2.forEach(e => {
    if (!unique2.includes(e)) {
        unique2.push(e);
    }
});

console.log(unique2.length);