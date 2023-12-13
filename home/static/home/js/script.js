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
    "static/home/img/individual-solutions/bg.png",
    "static/home/img/corporate-product/bg.png"
    // Add more image URLs as needed
];

const individual_solutions = document.querySelector("#individual-solutions");
const corporate_product = document.querySelector("#corporate-product");
const business_solutions = document.querySelector("#business-solutions");
const teachers_medical_scheme = document.querySelector("#teachers-medical-scheme");

preloadImages(imageUrls).then(() => {
    /**
     * Individual Solutions Background Swap
     */
    function individualSolutionsBackground(url) {
        document.body.style.backgroundImage = "url('" + url + "')";
    }

    if (individual_solutions) {
        individual_solutions.addEventListener("click", () => {
            individualSolutionsBackground("static/home/img/individual-solutions/bg.png");
        });
    }

    /**
     * Corporate Product Background Swap
     */
    function corporateProductBackground(url) {
        document.body.style.backgroundImage = "url('" + url + "')";
    }

    if (corporate_product) {
        corporate_product.addEventListener("click", () => {
            corporateProductBackground("static/home/img/corporate-product/bg.png");
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /**
     * Solutions Images on Hover
     */
    function solutionsImgOnHover(solutions_link) {
        const normalImg = solutions_link.querySelector("img.normalimg");
        normalImg.classList.add("d-none");

        const onhoverImg = solutions_link.querySelector("img.hoverimg");
        onhoverImg.classList.remove("d-none");

        const heading = solutions_link.querySelector("h2");
        heading.style.color = "var(--color-inverse)";

        solutions_link.addEventListener("mouseout", function () {
            normalImg.classList.remove("d-none");
            onhoverImg.classList.add("d-none");
            heading.style.color = "";
        });
    }

    individual_solutions.addEventListener("mouseover", function () {
        solutionsImgOnHover(individual_solutions);
    });
    business_solutions.addEventListener("mouseover", function () {
        solutionsImgOnHover(business_solutions);
    });
    corporate_product.addEventListener("mouseover", function () {
        solutionsImgOnHover(corporate_product);
    });
    teachers_medical_scheme.addEventListener("mouseover", function () {
        solutionsImgOnHover(teachers_medical_scheme);
    });

});

