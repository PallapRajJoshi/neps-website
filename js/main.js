// Simulate loading
document.addEventListener("DOMContentLoaded", function () {
    const loading = document.getElementById("loading");
    const content = document.getElementById("content");

    // Simulate a delay for loading (e.g., fetching data)
    setTimeout(() => {
        loading.style.display = "none"; // Hide loading screen
        content.style.display = "block"; // Show the main content
    }, 2000); // Adjust the delay as needed
});
// new

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const products = document.querySelectorAll(".product1");

    filterButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default action to avoid unwanted scrolling
            
            const category = this.getAttribute("data-category");

            products.forEach(product => {
                if (category === "all" || product.getAttribute("data-category") === category) {
                    product.style.display = "block";
                } else {
                    product.style.display = "none";
                }
            });
        });
    });
});