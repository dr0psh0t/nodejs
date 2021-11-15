/*
Every file comes with a set of details that we can inspect using Node.js.

In particular, using the stat() method provided by the fs module.

You call it passing a file path, and once Node.js gets the file details
it will call the callback function you pass, with 2 parameters: an
error message, and the file stats:
*/
const fs = require('fs');
fs.stat("C:\\Users\\wmdcprog\\Desktop\\untitled.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    //  we have access to the file stats in `stats`
    console.log(stats); //  display file stats
});

/*
Node.js provides also a sync method, which blocks the thread until
the file stat are ready:
 */
try {
    const stats = fs.statSync("C:\\Users\\wmdcprog\\Desktop\\untitled.txt");
    console.log(stats);
} catch (err) {
    console.log(err);
}

/*
The file information is included in the stats variable. What kind of information
can we extract using the stats?

A lot, including:

    if the file is a directory or a file, using stats.isFile() and stats.isDirectory()
    if the file is a symbolic link using stats.isSymbolicLink()
    the file size in bytes using stats.size.

There are other advanced methods, but the bulk of what you'll use in your
day-to-day programming is this.
 */
fs.stat("C:\\Users\\wmdcprog\\Desktop\\untitled.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }

    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
    console.log(stats.isSymbolicLink()); // false
    console.log(stats.size); // 1078
});