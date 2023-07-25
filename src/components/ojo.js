const cart= [
    {
        product: "aaa",
        price:10
    },
    {
        product: "bbb",
        price:200
    },
    {
        product: "ccc",
        price:80
    },
]
const reduceDiscount = (arr, discount) =>{
    return arr.map((item) => ({
        productito: item.product,
        presioydetalles: (item.price) - (item.price / 100 * discount)
    }))
}

const aplicable = reduceDiscount(cart, 10)
console.log(aplicable)