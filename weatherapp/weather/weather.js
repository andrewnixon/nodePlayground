const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/aa4e8642d4b4c5404891911ef22175d7/${lat},${lng}?units=si`,
        json: true
    } ,(error, response, body) => {
        if (!error && response.statusCode === 200){
            callback(undefined, {
                temperature: body.currently.temperature,
                appTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Error with forecast.io.', undefined);
        }    
    });
}

module.exports = {
    getWeather
};