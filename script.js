let count = localStorage.getItem("cartCount") || 0;
document.getElementById("count").innerText = count;

function openProduct(page) {
    window.location.href = page;
}

function addToCart() {
    count++;
    localStorage.setItem("cartCount", count);
    document.getElementById("count").innerText = count;
    alert("Product added to cart!");
}

function changeImage(img) {
    document.querySelector(".product-image img").src = img.src;
}
function filterProducts(value) {
    let cards = document.querySelectorAll(".product-card");
    value = value.toLowerCase();

    cards.forEach(card => {
        let name = card.innerText.toLowerCase();
        card.style.display = name.includes(value) ? "block" : "none";
    });
}
