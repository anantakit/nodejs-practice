const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([7, 4, 1])
        reject('Thing with wrong!')
    }, 2000)
})

doWorkPromise.then((result) => {
    console.log('success', result)
}).catch((err) => {
    console.log('error ', err)
})