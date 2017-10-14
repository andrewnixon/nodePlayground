const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
      error: 'Page not found.',
      name: 'Todo app v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([
      {name: 'Andrew', age:32},
      {name: 'Marjorie', age: 34},
      {name: 'Bea', age: 1}
    ]);
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports.app = app;
