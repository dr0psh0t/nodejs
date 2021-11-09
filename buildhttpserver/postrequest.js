//  use http for local development. using https will throw Error: write EPROTO
const https = require('http');

const data = new TextEncoder().encode(
    JSON.stringify({
        username: 'daryll',
        password: '1234'
    })
    //"username=daryll&password=1234"
);

const options = {
    hostname: '192.168.1.30',
    port: 8081,
    path: '/dashboard/api/login',
    method: 'POST',
    headers: {
        //'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Type': 'application/json',
        'Content-Length': data.length
    }
};

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data', d => {
        process.stdout.write(d);
    });
});

req.on('error', error => {
    console.log(error);
});

req.write(data);
req.end();