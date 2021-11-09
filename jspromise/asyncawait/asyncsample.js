function print(text) {
    console.log(text);
}

async function myFunction() {
    return Promise.resolve("RESOLVE");
    //return Promise.reject("REJECT");
}

myFunction().then(
    function (value) {
        print(value);
    },
    function (error) {
        print("error="+error);
    },
);