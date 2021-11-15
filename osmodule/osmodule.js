/*
This module provides many functions that you can use to retrieve
information from the underlying operating system and the computer
the program runs on, and interact with it.

Let's now see the main methods that os provides:
*/

const os = require('os');

// os.arch() - Return the string that identifies the underlying architecture, like arm, x64, arm64.
console.log(os.arch());

// os.cpus() - Return information on the CPUs available on your system.
console.log(os.cpus());

// os.freemem() - Return the number of bytes that represent the free memory in the system.
console.log(os.freemem());

// os.homedir() - Return the path to the home directory of the current user.
console.log(os.homedir());

// os.hostname() - Return the host name.
console.log(os.hostname());

// os.loadavg() - Return the calculation made by the operating system on the load average.
console.log(os.loadavg());

// os.networkInterfaces() - Returns the details of the network interfaces available on your system.
console.log(os.networkInterfaces());

// os.platform() - Return the platform that Node.js was compiled for
console.log(os.platform());

// os.release() - Returns a string that identifies the operating system release number
console.log(os.release());

// os.tmpdir() - Returns the path to the assigned temp folder.
console.log(os.tmpdir());

// os.totalmem() - Returns the number of bytes that represent the total memory available in the system.
console.log(os.totalmem());

// os.type() - Identifies the operating system:
console.log(os.type());

// os.uptime() - Returns the number of seconds the computer has been running since it was last rebooted.
console.log(os.uptime());

// os.userInfo() - Returns an object that contains the current username, uid, gid, shell, and homedir
console.log(os.userInfo());