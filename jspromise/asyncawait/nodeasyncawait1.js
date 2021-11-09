const doSomethingAsync = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve("I did something"), 3000)
    });
};

/*doSomethingAsync().then(
    function (ok) {
        console.log("ok= "+ok);
    },
    function (err) {
        console.log("err= "+err);
    }
);*/

const doSomething = async () => {
    console.log(await doSomethingAsync());
};
console.log("Before");
doSomething();
console.log("After");