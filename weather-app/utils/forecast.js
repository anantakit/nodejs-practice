const request = require('request')

const forecast = (latitude,longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/0f249e58451fed7a045f115ed2928e6e/'+ latitude +','+ longitude +'?units=us&lang=en'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        }
        else if (body.error) {
            callback('Unable to connect to weather service', undefined)
        }
        else {
            callback(undefined, {
                summary: body.daily.data[0].summary,
                temperature: body.currently.temperature,
                precipProbability: body.currently.precipProbability,
                message: body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degressout.There is a ' + body.currently.precipProbability + '% chance of rain.'
            })
        }
    })
}


module.exports = forecast