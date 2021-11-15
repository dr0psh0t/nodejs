const fs = require('fs');

fs.open("C:\\Users\\wmdcprog\\Desktop\\untitled.txt", "r", (err, fd) => {
    //  fd is our file descriptor
});

/*
You can also open the file by using the fs.openSync method,
which returns the file descriptor, instead of providing it in
a callback:*/
try {
    const fd = fs.openSync("C:\\Users\\wmdcprog\\Desktop\\untitled.txt", "r");
    console.log(fd.toString());
} catch (err) {
    console.error(err);
}