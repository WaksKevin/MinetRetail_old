document.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /**
     * Solutions Images on Hover
     */

    const individual_solutions = document.querySelector(".solutions-img.individual-solutions");
    const corporate_product = document.querySelector(".solutions-img.corporate-product");
    const business_solutions = document.querySelector(".solutions-img.business-solutions");
    const teachers_medical_scheme = document.querySelector(".solutions-img.teachers-medical-scheme");

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
