let done = true;

const isItDoneYet = new Promise((resolve, reject) => {
    if (done) {
        const workDone = "Here is the thing I built"
        resolve(workDone)
    } else {
        const why = "Still working on something else"
        reject(why)
    }
})

/*
As you can see, the promise checks the done global constant, and if that's true, the 
promise goes to a resolved state (since the resolve callback was called); otherwise, 
the reject callback is executed, putting the promise in a rejected state. (If none of 
these functions is called in the execution path, the promise will remain in a pending state)

Using resolve and reject, we can communicate back to the caller what the resulting promise 
state was, and what to do with it. In the above case we just returned a string, but it could 
be an object, or null as well. Because we've created the promise in the above snippet, it 
has already started executing. This is important to understand what's going on in the section 
Consuming a promise below.
*/

/*
Consuming a promise
*/
const checkIfItsDone = () => {
    isItDoneYet
    .then(ok => {
        console.log(ok)
        console.log("ok")
    })
    .catch(err => {
        console.error(err)
        console.log("err");
    })
}

checkIfItsDone()
/*
Running checkIfItsDone() will specify functions to execute when the isItDoneYet promise resolves 
(in the then call) or rejects (in the catch call).
*/