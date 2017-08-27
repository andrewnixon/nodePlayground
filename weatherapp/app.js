const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');

const argv = yargs
    .options({
        address: {
            demand: true,
            alias: 'a',
            describe: "Address to fetch weather for.",
            string: true
        }
})
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(argv.address, (error, results) => {
    if (error){
        console.log(error);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});

const request = require('request');

request({
    url: 'https://api.darksky.net/forecast/aa4e8642d4b4c5404891911ef22175d7/52.4799139,-1.9711264?units=si',
    json: true
} ,(error, response, body) => {
    if (!error && response.statusCode === 200){
        console.log(`Temp: ${body.currently.temperature} C`);
    } else {
        console.log('Error with forecast.io');
    }    
});

//https://api.darksky.net/forecast/aa4e8642d4b4c5404891911ef22175d7/52.4799139,-1.9711264?units=si