document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Update Placeholder
     */
    // Define a function that adds or removes the placeholder attribute based on screen size
    function updatePlaceholder() {
        var usernameCellphoneInput = document.querySelector("#username-cellphone");
        var passwordInput = document.querySelector("#password");

        // Check the screen width
        if (window.innerWidth < 576) {
            // Screen size is less than 576px, remove the placeholder attribute
            usernameCellphoneInput.removeAttribute("placeholder");
            passwordInput.removeAttribute("placeholder");
        } else {
            // Screen size is 576px or more, add the placeholder attribute
            usernameCellphoneInput.setAttribute("placeholder", "Username / Cell Phone");
            passwordInput.setAttribute("placeholder", "Password");
        }
    }
    window.addEventListener("resize", updatePlaceholder);

    // Call the updatePlaceholder function initially
    updatePlaceholder();

});