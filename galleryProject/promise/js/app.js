// First Example

// const myPromise = doSomeWork();
// // const myPromise = doSomeHardWork();
// // const myPromise = sleep(ms = 1000);
// myPromise
//     .then((information) => {
//         console.log('Done!', information);
//         return sleep(1000)
//     })
//     .then(() => {
//         console.log("and even a good night 's sleep");
//     })
//     .catch((error) => {
//         console.log('Error!', error);
//     });

// // console.log(myPromise);


// Second exapmle

// console.log('Boils water');
// sleep(500)
//     .then(() => {
//         console.log('Boiled water');
//     })
//     .then(() => {
//         console.log('Brewed tea');
//         return doSomeHardWork();
//     })
//     .then(() => {
//         console.log('The tea has cooled down');
//     })

//     .catch((error) => {
//         console.log('Error!', error);
//     })


// Third example

fakeApi('Tester')
    .then((data) => {
        console.log(data);
    })