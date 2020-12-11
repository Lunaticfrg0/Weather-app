const geolocate = require("./utils/geolocate.js");
const forecast = require("./utils/forecast.js")

const address = process.argv[2];

if(!address){
    console.log("Please provide a location")
}
else {
    geolocate(address, (error, {latitude, longitude, location} = {})=>{
    
        if(error){
            return console.log("Error", error);
        }
        forecast(latitude, longitude, (error, forecastData)=>{
            if(error){
                return console.log("Error", error)
            }
            console.log(location);
            console.log("Data", forecastData);
        })
    })
}
