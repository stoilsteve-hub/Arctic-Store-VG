// get id from url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// fetch specific product
async function getProduct() {
    const res = await fetch('fakestore.json');
    const allProducts = await res.json();
    const product = allProducts.find(p => p.id == productId);
    if (!product) return;
    console.log(product);

/* async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products/' + productId);
    const product = await res.json();
    console.log(product); */

    // dynamically update browser tab
    document.title = `${product.title} - Arctic Store`;

    // inject html
    document.getElementById('single-product-container').innerHTML = `
        <div class="product-card">
            <div class="product-card-header">
                <h2>${product.title}</h2>
            </div>
            <div class="product-card-body">
                <img src="${product.image}" alt="${product.title}">
                <p class="price">${product.price}€</p>
                <p class="description">${product.description}</p>
                <button id="order-btn">Order</button>
            </div>
        </div>
    `;

    const orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', () => {
        addToCart(product.id, product.title, product.price, product.image);
    });
}

// check if id exists
if (productId) {
    getProduct();
}
