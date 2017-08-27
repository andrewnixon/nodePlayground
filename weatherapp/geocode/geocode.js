const request = require('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    
    request({
        url:`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    } ,(error, response, body) => {
        if (error){
            callback('Unable to connect to servers.', undefined);
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find address', undefined);
        } else if (body.status === 'OK') {
            callback(undefined, {
                formAddress: body.results[0].formatted_address,
                lat: body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            });
        } else {
            callback('Unknown error.', undefined);
        }
    });
}

module.exports = {
    geocodeAddress
};