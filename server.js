const http = require('http');

const port = process.env.PORT || 3000;

const onData = (req, res) => {
    req.on('data', (chunk) => {
        let storeData = [];
        let toInteger = parseInt(chunk.toString());
        storeData.push(toInteger);
        console.log(toInteger + 1);
    });
}

const onError = (req, res) => {
    req.on('error', (err) => {
        console.log(err);
    });
}

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/') {
        onData(req, res);
        onError(req, res);
    }
    if(req.method === 'GET' && req.url === '/'){
        res.end('Go in Terminal');
    }
});

server.listen(port, (err) => {
    if (err) throw err;
    console.log(`Listening at ${port}`);
});