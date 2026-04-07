document.addEventListener("DOMContentLoaded", () => {
    const categoryBar = document.getElementById("allCategoryButtons");
    const productGrid = document.getElementById("productGrid");

    getCategories();
    showProducts('all');

    // IF FAKESTOREAPI
        function getCategories() {
            fetch("https://fakestoreapi.com/products/categories")
                .then((res) => res.json())
                .then(categories => {
                    categories.forEach(cat => {
                        console.log("cat is: " + cat)
                        const catButton = document.createElement('button');
                        catButton.type = "button";
                        catButton.className = "btn m-1 catButton";
                        catButton.textContent = cat;
                        catButton.addEventListener('click', () => {
                            showProducts(cat)
                        });
                        categoryBar.appendChild(catButton);
                    })
                    categoryBar.appendChild(getAllButton());
                })
        } 

    // IF FAKESTORE.JSON
 /*    function getCategories() {
        const categories = [];
        fetch("../../fakestore.json")
            .then((res) => res.json())
            .then(products => {
                products.forEach(product => {
                    console.log("product.category: " + product.category)
                    const exists = false;
                    if (categories.length === 0) {
                        categories.push(product.category)
                    }
                    else {
                        categories.forEach(p => {
                            if (p === product.category) {
                                exists = true;
                            }
                        })
                    }
                    if (!exists) {
                        const cat = product.category;
                        const catButton = document.createElement('button');
                        catButton.type = "button";
                        catButton.className = "btn m-1 catButton";
                        catButton.textContent = cat;
                        catButton.addEventListener('click', () => {
                            showProducts(cat)
                        });
                        categoryBar.appendChild(catButton);
                    }
                })
            })
        categoryBar.appendChild(getAllButton());
    } */

    function getAllButton() {
        const catButton = document.createElement('button');
        catButton.type = "button";
        catButton.className = "btn m-1 catButton";
        catButton.textContent = 'all';
        catButton.addEventListener('click', () => {
            showProducts('all')
        });
        return catButton;
    }

    function showProducts(category) {
        fetch("https://fakestoreapi.com/products")
        //fetch("../../fakestore.json")
            .then((res) => res.json())
            .then((products) => {
                const allProducts = getProductSubset(products, category);

                productGrid.innerHTML = '';
                allProducts.forEach(product => {
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
                </div>`;
                    productGrid.innerHTML += card;
                });
            });
        }

    function getProductSubset(allProducts, category) {
        if (category == 'all') {
            return allProducts;
        }
        else {
            return allProducts.filter(p => p.category == category);
        }
    }
});