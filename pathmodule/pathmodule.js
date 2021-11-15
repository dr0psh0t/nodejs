/*
The path module provides a lot of very useful functionality to access and interact with
the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply
requiring it:

const path = require('path')

This module provides path.sep which provides the path segment separator (\ on Windows,
and / on Linux / macOS), and path.delimiter which provides the path delimiter (; on
Windows, and : on Linux / macOS).

These are the path methods:
 */

/*
path.basename()

Return the last portion of a path. A second parameter can filter out the file extension:
*/
const path = require('path');

let a = path.basename('something');
let b = path.basename('something.txt');
let c = path.basename('something.txt', '.txt');

console.log(a); // something
console.log(b); // something.txt
console.log(c); // something

/*
path.dirname()

Return the directory part of a path:
 */
let d = path.dirname('something');
let e = path.dirname('something.txt');

console.log(d);
console.log(e);
