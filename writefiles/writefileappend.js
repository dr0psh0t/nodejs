/*
A handy method to append content to the end of a file is fs.appendFile()
(and its fs.appendFileSync() counterpart):
 */

const fs = require('fs');

/*const content = "david";

fs.appendFile("C:\\Users\\wmdcprog\\Desktop\\test.txt", content, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log("file write append success");
});*/

/*
A handy method to append content to the end of a file is
fs.appendFile() (and its fs.appendFileSync() counterpart):
 */
try {
    const data = fs.appendFileSync("C:\\Users\\wmdcprog\\Desktop\\test.txt", "dagondon");
    console.log(data);
} catch (err) {
    console.error(err);
}