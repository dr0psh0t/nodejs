const axios = require('axios');

axios.post("http://192.168.1.30:3000/todos", {
    todo: 'Buy the milk'
});