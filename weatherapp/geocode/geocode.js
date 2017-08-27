const request = require('request');

var geocodeAddress = (address) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    } ,(error, response, body) => {
        if (error){
            console.log('Unable to connect to servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            console.log('Unable to find address');
        } else if (body.status === 'OK') {
            console.log(`Address: ${body.results[0].formatted_address}`);
            console.log('===============================================');
            console.log(`Lat: ${body.results[0].geometry.location.lat}`);
            console.log(`Lat: ${body.results[0].geometry.location.lng}`);
        } else {
            console.log('Unknown error.');
        }
    });
}

module.exports = {
    geocodeAddress
};