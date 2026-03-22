// product.js
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products/' + productId);
    const product = await res.json();
    console.log(product);
}

if (productId) {
    getProduct();
}
