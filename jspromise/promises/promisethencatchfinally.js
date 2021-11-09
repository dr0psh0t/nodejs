/*new Promise((resolve, reject) => {
    throw new Error("error");
}).finally(() => {
    console.log("Promise ready");
}).catch(err => {
    console.log("catch="+err);
});*/
/*
prints:
Promise ready
catch=Error: error
 */

new Promise((resolve, reject) => {
    //throw new Error("error");
    resolve("resolved");
}).finally(() => {
    console.log("Promise ready");
}).then(res => {
    console.log("result="+res);
}).catch(err => {
    console.log("catch="+err);
});
/*
Promise ready
result=resolved
*/