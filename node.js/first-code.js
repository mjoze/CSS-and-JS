const a = () => {
    console.log('function a');
};

console.log("hello");


setTimeout(
    () => {
        const text = 'done'
        console.log(text);
    }, 1000
);

console.log('end');
a();