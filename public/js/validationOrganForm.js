function validateForm() {
    let valid = true;

    const nameInput = document.getElementById('Name');
    const priceInput = document.getElementById('Price');

    const errorName = document.getElementById('errorName');
    const errorPrice = document.getElementById('errorPrice');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, priceInput], [errorName, errorPrice], errorsSummary);

    //name validation
    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "The field is required.";
    } else if(!checkTextLengthRange(nameInput.value,1,200)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "This field should contain 1 to 200 characters.";
    }

    //price validation
    if(!checkRequired(priceInput.value)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "The field is required.";
    } else if(!checkNumberRange(priceInput.value,0,99999.99)) {
        valid = false;
        priceInput.classList.add("error-input");
        errorPrice.innerText = "This number should be between 0 and 99999.99";
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}
