/*
console.log('1: Synchronous');

// Macrotask (Timer)
setTimeout(() => {
    console.log('4: Macrotask (setTimeout)');
}, 0);

// Microtask (Promise)
Promise.resolve().then(() => {
    console.log('3: Microtask (Promise)');
});

console.log('2: Synchronous');

*/

console.log('Start');

setTimeout(() => console.log('Timer 1'), 0);

Promise.resolve()
    .then(() => {
        console.log('Promise 1');
        return Promise.resolve();
    })
    .then(() => console.log('Promise 2'));

setTimeout(() => console.log('Timer 2'), 0);

Promise.resolve().then(() => {
    console.log('Promise 3');
    setTimeout(() => console.log('Timer 3'), 0);
});

console.log('End');