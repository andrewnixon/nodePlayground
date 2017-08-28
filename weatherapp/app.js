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
        console.log(`Weather for: ${geoResults.formAddress}`)
        weather.getWeather(geoResults.lat, geoResults.lng, (error, weatherResults) => {
            if (error){
                console.log(error);
            } else {
                console.log(`It is currently ${weatherResults.temperature} C and it feels ${weatherResults.appTemperature} C.`)
            }
        });
    }
});

//https://api.darksky.net/forecast/aa4e8642d4b4c5404891911ef22175d7/52.4799139,-1.9711264?units=si