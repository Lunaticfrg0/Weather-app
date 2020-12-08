const request = require("postman-request");
const apiKeys = require("./constants.js");

const forecast = (latitude, longitude, callback) => {

    let urlWeather = `http://api.weatherstack.com/current?access_key=${apiKeys.weatherStack}&query=${latitude},${longitude}`;

    request({url: urlWeather, json: true}, (error, response) =>{
        if(error)
            {
            callback("Unable to connect to weather service!", undefined)
            }
        else if(response.body.error)
            {
            callback("Unable to find location!", undefined)
            }
        else{
            const data = response.body.current;
            callback(undefined, `${data.weather_descriptions[0]}. Its currently ${data.temperature} degrees, it feels like ${data.feelslike} degrees out. There is a ${data.precip}% chance of rain`);
            }
    })
}
module.exports = forecast;