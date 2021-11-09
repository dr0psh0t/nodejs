// navigate to D:\daryll\nodejs and run:
// $ npm install axios --save if axios module is not downloaded yet
const axios = require('axios');

axios.post('http://192.168.1.30:8081/dashboard/api/login', {
    username: 'daryll',
    password: '1234'
}).then(res => {
    console.log(`statusCode: ${res.status}`);
    console.log(res);
}).catch(error => {
    console.error(error);
});