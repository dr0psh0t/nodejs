function myDisplayer(text) {
    console.log(text);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 3;

    //  some code (try to change x to 5)
    if (x === 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    function(error) {
        myDisplayer(error);
    }
);