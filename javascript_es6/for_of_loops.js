let array = [1,2,3,4,5,6];

let obj = {
    first_name: 'luiz',
    last_name: 'carlos'
};

// for(let i in array) {
//     console.log(i, array[i]);
// }

// for(let i in obj) {
//     console.log(i, obj[i]);
// }

let array2 = [
    {},{},{},{}
];

for(let value of array2) {
    console.log(value);
}

for(let value of array) {
    console.log(value);
}

for(let [index, value] of array.entries()) {
    console.log(index, value);
}

let keys = Object.keys(obj);
for(let key of keys) {
    console.log(obj[key]);
}