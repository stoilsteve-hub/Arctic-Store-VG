const productGrid = document.getElementById("productGrid");
fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((products) => {

        products.forEach(product => {
            const card = `
<div class="col">
                    <a href="../../product.html?id=${product.id}" class="grid-card-link">
                        <div class="grid-card">
                            <div class="grid-card-header">
                                <h3>${product.title}</h3>
                            </div>
                            <img src="${product.image}" class="grid-card-img-top img-fluid"></img>
                            <div class="grid-card-body">
                                <p class="grid-card-price">${product.price}€</p>
                                <button class="grid-button">
                                    Order
                                </button>
                            </div>
                        </div>
                    </a>
  </div>
      `;
            productGrid.innerHTML += card;
        });
    });