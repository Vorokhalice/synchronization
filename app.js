const express = require('express')

let app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/views/sync.html');
});

app.get('/time_request', function(req, res) {
    res.send(JSON.stringify({
        'time': Date.now()
    }))
});

app.listen(8080)