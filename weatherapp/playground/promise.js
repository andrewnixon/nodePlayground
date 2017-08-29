var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            } else {
                reject('Not numbers');
            }
        }, 1500);
    });
};

/* chaining promises! */
asyncAdd(5,7).then((res) => {
    console.log(res);
    return asyncAdd(res, 33);
}).then((res) => {
    console.log(res);
}).catch((error) => {
    console.log(error);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         // resolve('Hey it worked.');
//         reject('Unable to do stuff');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('success: ', message);
// }, (errorMessage) => {
//     console.log('error: ', errorMessage);
// });