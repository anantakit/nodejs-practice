// object property shorthand

const name = 'frame'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'suranaree'
}

console.log(user)


// Object destructuring

const product = {
    lebel: 'Red notebook',
    price: 30,
    stock: 200,
    salePrice: undefined,
}

// const lable = product.lable
// const stock = product.stock

// const { lebel, stock:stockProduct, salePrice = 40} = product
// console.log(lebel)
// console.log(stockProduct) // rename from stock
// console.log(salePrice) // default


const transaction = (type, { lebel, stock = 0} = {}) => {
    console.log(type, lebel, stock)
}

transaction('order',product)