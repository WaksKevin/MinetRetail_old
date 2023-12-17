document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /**
     * Page ID
     */
    "use strict";
    const page_id = document.querySelector("body");

    if (window.location.pathname.endsWith("/login.html")) {
        page_id.setAttribute("id", "login");
    }

    /**
     * Update Placeholder
     */
    function updatePlaceholder() {
        var usernameCellphoneInput = document.querySelector("#username-cellphone");
        var passwordInput = document.querySelector("#password");

        if (window.innerWidth < 576) {
            usernameCellphoneInput.removeAttribute("placeholder");
            passwordInput.removeAttribute("placeholder");
        } else {
            usernameCellphoneInput.setAttribute("placeholder", "Username / Cell Phone");
            passwordInput.setAttribute("placeholder", "Password");
        }
    }
    window.addEventListener("resize", updatePlaceholder);

    // Call the updatePlaceholder function initially
    updatePlaceholder();

    /**
     * Form Validation
     */
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
    const errorMessage = document.querySelector("#login-content .login-form .error-message");
    const successMessage = document.querySelector("#consent-page .login-form .success-message");

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                errorMessage.classList.remove("d-none");
            }

            form.classList.add('was-validated')
        }, false)
    });

});