const wishlist = document.getElementById("productwish")
const cartlist = document.getElementById("productcart")
const checkoutbtn = document.getElementById("checkoutbtn")
const totalamount = document.getElementById("totalamount")
let cart = []
let totalpaisa = []
let Arr = [
    { id: 1, name: "Product 1", price: 19.99, },
    { id: 2, name: "Product 2", price: 9.99, },
    { id: 3, name: "Product 3", price: 29.99, },
]

Arr.forEach((eachobject) => {
    const btn = document.createElement('button')
    btn.textContent = "Add to cart";
    btn.setAttribute("dataid", `${eachobject.id}`)
    btn.classList.add("checkoutbtn")
    const p = document.createElement('p')
    p.innerHTML = `<span>${eachobject.name}__ $${eachobject.price}</span>`
    p.append(btn)
    wishlist.appendChild(p)
})

let amount = 0;
wishlist.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        const productid = parseInt(e.target.getAttribute("dataid"))
        console.log(productid)
        const product = Arr.find(p => p.id === productid)
        // console.log(product)
        addtocart(product)
        // amount = Math.round(`${product.price}` + `${amount}`);
        // totalamount.textContent = amount
        
        totalpaisa.push(`${product.price}`)
        
        
    }
})
function finaltotal() {
    return cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
}

function addtocart(prod) {
    cart.push(prod)
    const element = document.createElement('p')
    element.innerHTML = `<span> ${prod.name} --- ${prod.price} </span>`
    cartlist.append(element)
    totalamount.textContent = finaltotal()

}

