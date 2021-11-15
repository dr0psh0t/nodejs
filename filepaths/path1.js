const path = require('path');

const untitled = "C:\\Users\\wmdcprog\\Desktop\\untitled.txt";

console.log(path.dirname(untitled)); // C:\Users\wmdcprog\Desktop
console.log(path.basename(untitled)); // untitled.txt
console.log(path.extname(untitled)); // .txt

// You can get the file name without the extension by
// specifying a second argument to basename:
console.log(path.basename(untitled, path.extname(untitled))); // untitled
