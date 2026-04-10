const cartOffcanvas = document.getElementById('cartOffcanvas');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const cartTotalElement = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const clearCartBtn = document.getElementById('clearCartBtn');

let cart = JSON.parse(localStorage.getItem('vg_cart')) || [];

function saveCart() {
    localStorage.setItem('vg_cart', JSON.stringify(cart));
    renderCart();
}

function addToCart(id, title, price, image) {
    const existing = cart.find(item => item.id == id);
    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    saveCart();
    
    if (typeof bootstrap !== 'undefined' && cartOffcanvas) {
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(cartOffcanvas) || new bootstrap.Offcanvas(cartOffcanvas);
        bsOffcanvas.show();
    }
}

function changeQuantity(id, amount) {
    const item = cart.find(i => i.id == id);
    if (item) {
        item.quantity += amount;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id != id);
        }
        saveCart();
    }
}

function removeFromCart(id) {
    cart = cart.filter(i => i.id != id);
    saveCart();
}

function clearCart() {
    cart = [];
    saveCart();
}

function renderCart() {
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        count += item.quantity;

        cartItemsContainer.innerHTML += `
            <div class="d-flex align-items-center mb-3 pb-3 border-bottom">
                <img src="${item.image}" style="width: 50px; height: 50px; object-fit: contain;" class="me-3">
                <div class="flex-grow-1">
                    <h6 class="mb-0 text-truncate" style="max-width: 130px; font-size: 0.9rem;">${item.title}</h6>
                    <small style="font-size: 0.8rem;">${item.price}€ x ${item.quantity} = <strong>${itemTotal.toFixed(2)}€</strong></small>
                </div>
                <div class="d-flex align-items-center">
                    <button class="btn btn-sm btn-outline-dark px-2 py-0" onclick="changeQuantity('${item.id}', -1)">-</button>
                    <span class="mx-2" style="font-size: 0.9rem;">${item.quantity}</span>
                    <button class="btn btn-sm btn-outline-dark px-2 py-0" onclick="changeQuantity('${item.id}', 1)">+</button>
                    <button class="btn btn-sm btn-danger ms-2 px-2 py-0" onclick="removeFromCart('${item.id}')">X</button>
                </div>
            </div>
        `;
    });

    if (cartTotalElement) cartTotalElement.innerText = total.toFixed(2) + '€';
    
    document.querySelectorAll('.cartBadgeCount').forEach(badge => {
        badge.innerText = count;
    });
}

if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);

if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return;
        if (typeof showOrderPopup === 'function') {
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(cartOffcanvas);
            if (bsOffcanvas) bsOffcanvas.hide();
            showOrderPopup();
        }
    });
}

document.addEventListener('DOMContentLoaded', renderCart);
