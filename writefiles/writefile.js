const fs = require('fs');

/*var content = "Some content!";

fs.writeFile("C:\\Users\\wmdcprog\\Desktop\\test.txt", content, err => {
    if (err) {
        console.error(err);
    } else {
        console.log("file write success");
    }
    //  file written successfully
});*/

var content = "Daryll";

//  Alternatively, you can use the synchronous version fs.writeFileSync():
try {
    const data = fs.writeFileSync("C:\\Users\\wmdcprog\\Desktop\\test.txt", content);
    //  file written successfully
    console.log("file write success");
} catch (err) {
    console.error(err);
}

/*
By default, this API will replace the contents of the file if it does already exist.
You can modify the default by specifying a flag:

fs.writeFile('/Users/joe/test.txt', content, { flag: 'a+' }, err => {})

The flags you'll likely use are

    r+ open the file for reading and writing

    w+ open the file for reading and writing, positioning the stream at the
    beginning of the file. The file is created if it does not exist

    a open the file for writing, positioning the stream at the end of the file.
    The file is created if it does not exist

    a+ open the file for reading and writing, positioning the stream at the end
    of the file. The file is created if it does not exist
 */

