const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve({
        //     name: 'Jarmo',
        //     age: 28
        // });
        reject('Something went wrong');
    }, 5000);
    
});

console.log('Before');

promise.then((data) => {
    console.log('1', data);
}).then((data) => {
    console.log('An extra run');
}).catch((error) => {
    console.log('error: ' + error);
});


console.log('After');