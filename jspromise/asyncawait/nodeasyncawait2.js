const aFunction = async () => {
    return 'test';
};
aFunction().then(
    function (ok) {
        console.log(ok);
    },
    function (err) {
        console.log(err);
    }
);

//  is the same as:

const aFunction2 = () => {
  return Promise.resolve("TEST");
};
aFunction2().then(
    function (ok) {
        console.log(ok);
    },
    function (err) {
        console.log(err);
    }
);