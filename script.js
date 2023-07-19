const form = document.querySelector("form");

function errorMsg(field, errorText) {
    field.classList.add("error");
    var errorElement = document.createElement("small");
        errorElement.classList.add("error-text");
        errorElement.innerText = errorText;
    field.closest(".formEmail").appendChild(errorElement);
}

function errorIcon() {
    var icon = document.getElementById("formIcon");
        icon.style.display = "block";
}

function validateForm(e) {
    e.preventDefault();

    let emailInput = document.getElementById("email");

    let email = emailInput.value.trim();

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,4}$/;

    var errorFields = document.querySelectorAll(".formEmail .error");
        errorFields.forEach(function (field) {
            field.classList.remove("error");
        });

    var errorTexts = document.querySelectorAll(".error-text");
        errorTexts.forEach(function (errorText) {
            errorText.remove();
        });

    if (!emailPattern.test(email)) {
        errorMsg(emailInput, "Please provide a valid email");
        errorIcon();
    }

    var checkErrors = document.querySelectorAll(".formEmail .error");
    if (checkErrors.length !== 0) {
        return;
    }

    form.submit();
}

form.addEventListener("submit", validateForm);