const request = require('request')

const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiZ29kbGFzcyIsImEiOiJjazNsbmliZ2YxNmgxM2ZvM2RhZm1hOHU2In0.Kn2h4NSrLxayP8FDSu2llw&limit=1'

    request({url, json: true}, (error,{ body }) => {
        if(error){
            callback('unable to connect to geocodeing service', undefined)
        }
        else if (body.features.length === 0) {
            callback('Not Found. Try search again!',undefined)
        }
        else{
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name})
        }
    })
}

module.exports = geocode