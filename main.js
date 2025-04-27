const app = document.getElementById("app");
app.innerHTML = `<div class="layout">
            <div class="sidebar">
                <nav id="categories-nav">
                </nav>
            </div>

            <div class="main-content">
                <div class="header">
                    <div class="item-count">6 ITEMS</div>
                    <div class="sort-by">
                        <span>SORT BY</span>
                        <button>
                            RECOMMENDED
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="m6 9 6 6 6-6" />
                            </svg>
                        </button>
                    </div>
                </div>


                <div class="product-grid">
                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image.png" alt="Slub Jersey T-Shirt">
                        </div>
                        <h3 class="product-title">SLUB JERSEY T-SHIRT</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image (1).png" alt="Printed T-Shirt">
                        </div>
                        <h3 class="product-title">PRINTED T-SHIRT</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image (2).png" alt="Cotton T-Shirt">
                        </div>
                        <h3 class="product-title">COTTON T-SHIRT</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image (3).png" alt="T-Shirt with a Motif">
                        </div>
                        <h3 class="product-title">T-SHIRT WITH A MOTIF</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image (4).png" alt="Cotton T-Shirt Regular Fit">
                        </div>
                        <h3 class="product-title">COTTON T-SHIRT REGULAR FIT</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>

                    <div class="product-card">
                        <div class="product-image">
                            <img src="./assets/Product image (5).png" alt="Slub Jersey T-Shirt">
                        </div>
                        <h3 class="product-title">SLUB JERSEY T-SHIRT</h3>
                        <p class="product-price">$ 12.99</p>
                        <button class="add-to-bag">Add to bag</button>
                    </div>
                </div>
            </div>
        </div>`;

        const categories = [
            "Jackets & Coats",
            "Hoodies",
            "T-shirts & Vests",
            "Shirts",
            "Blazers & Suits",
            "Jeans",
            "Trousers",
            "Shorts",
            "Underwear",
            "Gift sets",
        ];



function addCategories(categories) {
    categories.forEach((category) => {
        const categoriesContainer = document.getElementById("categories-nav")
        const categoryElement = document.createElement("button");
        categoryElement.classList.add("category");
        categoryElement.textContent = category;
        categoriesContainer.appendChild(categoryElement);
    });
}



function addEventToCategories() {
    const categoryElements = document.querySelectorAll(".category");
    categoryElements.forEach((category) => {
        category.addEventListener("click", function () {
            category.classList.add("selected");
            categoryElements.forEach((otherCategory) => {
                if (otherCategory !== category) {
                    otherCategory.classList.remove("selected");
                }
            });
        });
    });
}

addCategories(categories);
addEventToCategories();


