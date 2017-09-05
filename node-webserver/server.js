const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    now = new Date().toString();
    log = `${now}: ${req.ip} - ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n', (err) => {
        if (err) {
            console.log('Unable to write server log');
        }
    });
    console.log(log);
    next();
});

// app.use((req, res, next) => {
//     res.render('maintenance.hbs');
// });

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pageTitle:'Welcome Page',
        welcomeMessage: 'This is a welcome message!!!'
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle:'About Page'
    });
})

app.get('/projects', (req, res) => {
    res.render('projects.hbs', {
        pageTitle:'Projects Page'
    });
})

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'Unable to handle request'
    });
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});