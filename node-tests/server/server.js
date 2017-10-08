const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
