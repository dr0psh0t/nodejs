let promisechain = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1), 2000);
});

/*
prints:
1
2
4
 */
promisechain.then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
}).then(function (result) {
    console.log(result);
    return result * 2;
});