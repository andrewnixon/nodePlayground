const yargs = require('yargs');

const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');

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

geocode.geocodeAddress(argv.address, (error, geoResults) => {
    if (error){
        console.log(error);
    } else {
        console.log(JSON.stringify(geoResults, undefined, 2));
    }
});

weather.getWeather(52.4799139, -1.9711264, (error, weatherResults) => {
    if (error){
        console.log(error);
    } else {
        console.log(JSON.stringify(weatherResults, undefined, 2));
    }
});

//https://api.darksky.net/forecast/aa4e8642d4b4c5404891911ef22175d7/52.4799139,-1.9711264?units=si