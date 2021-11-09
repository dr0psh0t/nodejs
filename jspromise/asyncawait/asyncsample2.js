function myResolve(val) {
    console.log("myResolve="+val);
}

function myReject(val) {
    console.log("myReject="+val);
}

async function f() {
    return 1;
}

//f().then(myResolve, myReject);    //  1

/******************************************************/

function myResolve2(val) {
    console.log("myResolve2="+val);
}

function myReject2(val) {
    console.log("myReject2="+val);
}

async function f2() {
    return Promise.resolve(1);
    //return Promise.reject(0);
}

f2().then(myResolve2, myReject2);