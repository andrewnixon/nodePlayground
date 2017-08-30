const express = require('express');

var app = express();

app.get('/', (req, res) => {
    // res.send('<h1>Hello, Express.</h1>');
    res.send({
        name: 'test',
        likes: [
            'yay',
            'music'
        ]
    });
});

app.get('/about', (req, res) => {
    res.send('<h1>About Page</h1>');
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})

app.listen(3000);