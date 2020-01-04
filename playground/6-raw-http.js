const https = require('https')

const url = 'https://api.darksky.net/forecast/0f249e58451fed7a045f115ed2928e6e/40,-70?units=us&lang=en'

const request =  https.request(url, (response) => {

    let data = ''

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    response.on('end', () =>{
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on('error', (error) => {
    console.log('An error ', error)
})

request.end()