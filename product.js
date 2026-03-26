// get id from url
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// fetch specific product
async function getProduct() {
    const res = await fetch('https://fakestoreapi.com/products/' + productId);
    const product = await res.json();

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

    // order button logic
    const orderBtn = document.getElementById('order-btn');
    orderBtn.addEventListener('click', () => {
        // save data for lukas
        const productData = {
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image
        };
        localStorage.setItem('selectedProduct', JSON.stringify(productData));
        
        // redirect to order page
        window.location.href = 'js/Order popup/orderTest.html';
    });
}

// check if id exists
if (productId) {
    getProduct();
}
