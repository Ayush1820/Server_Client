const request = require('request');

request.post({
    url: 'http://localhost:3000',
    json: true,
    body: 1
}, (err, body, res) => {
    if (!err && res.statusCode === 200) {
        return body;
    }
});