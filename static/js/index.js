"use strict";

/**
 * Preload Images
 */
const preloadImages = (urls) => {
    return Promise.all(urls.map(url => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => resolve(img);
            img.onerror = reject;
            img.src = url;
        });
    }));
};

const imageUrls = [
    "static/img/home/individual-solutions/bg.png",
    "static/img/home/corporate-product/bg.png"
    // Add more image URLs as needed
];

preloadImages(imageUrls).then(() => {
    /**
     * Individual Solutions Background Swap
     */
    const individual_sols = document.querySelector("#individual-solutions-link");
    function individualSolutionsBackground(url) {
        document.body.style.backgroundImage = "url('" + url + "')";
    }

    if (individual_sols) {
        individual_sols.addEventListener("click", () => {
            individualSolutionsBackground("static/img/home/individual-solutions/bg.png");
        });
    }

    /**
     * Corporate Product Background Swap
     */
    const corporate_prod = document.querySelector("#corporate-product-link");
    function corporateProductBackground(url) {
        document.body.style.backgroundImage = "url('" + url + "')";
    }

    if (corporate_prod) {
        corporate_prod.addEventListener("click", () => {
            corporateProductBackground("static/img/home/corporate-product/bg.png");
        });
    }
});
