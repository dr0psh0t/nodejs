let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() {
        myResolve("Hello World !!");
    }, 3000);
});

myPromise.then(function(value) {
    console.log(value);
});