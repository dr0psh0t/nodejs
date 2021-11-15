const fs = require('fs');
const file = fs.createWriteStream('sample.txt');

for (let i = 0; i < 10; i++) {
    file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n');
}

file.end();

/*
Look what I used to create that big file. A writable stream!

The fs module can be used to read from and write to files using a stream interface.
In the example above, we’re writing to that big.file through a writable stream 1
million lines with a loop.

Running the script above generates a file that’s about ~400 MB.
*/