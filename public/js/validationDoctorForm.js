function validateForm() {
    let landingDate = "5500-04-01";
    let valid = true;

    const nameInput = document.getElementById('name');
    const dateJoinInput = document.getElementById('dateJoin');
    const dateLeaveInput = document.getElementById('dateLeave');
    const passwordInput = document.getElementById('password');

    const errorName = document.getElementById('errorName');
    const errorDateJoin = document.getElementById('errorDateJoin');
    const errorDateLeave = document.getElementById('errorDateLeave');
    const errorPassword = document.getElementById('errorPassword');
    const errorsSummary = document.getElementById('errorsSummary');

    //TODO internationalization of error messages was causing validation to not work, it's poorly explained in the tutorial too.

    // const invalidFormMessage = document.getElementById('errorMessage-invalidForm').innerText;
    // const fieldRequiredMessage = document.getElementById('errorMessage-fieldRequired').innerText;
    // const characterLimitMessage = document.getElementById('errorMessage-characterLimit').innerText;
    // const dateBeforeLandingMessage = document.getElementById('errorMessage-dateBeforeLanding').innerText;
    // const dateLeaveBeforeJoinMessage = document.getElementById('errorMessage-dateLeaveBeforeJoin').innerText;

    resetErrors([nameInput, dateJoinInput, dateLeaveInput, passwordInput], [errorName, errorDateJoin, errorDateLeave, errorPassword], errorsSummary);

    //name validation
    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "This field is required";
        //errorName.innerText = __('validationMessage.fieldRequired');//fieldRequiredMessage;
    } else if(!checkTextLengthRange(nameInput.value,1,200)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = "This field has a character limit.";
        // errorName.innerText = characterLimitMessage;
    }

    //dateJoin validation
    if(!checkRequired(dateJoinInput.value)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = "This field is required";
        // errorDateJoin.innerText = fieldRequiredMessage;
    } else if(!checkDateIfAfter(dateJoinInput.value, landingDate)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = "Date cannot occur before landing date.";
        // errorDateJoin.innerText = dateBeforeLandingMessage;
    }

    //dateLeave validation
    if(!(dateLeaveInput.value==null || dateLeaveInput.value=='')) { //issues with dateLeave being null
        console.log(dateLeaveInput);
        if(!checkDateIfAfter(dateLeaveInput.value, landingDate)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = "Date cannot occur before landing date.";
            // errorDateLeave.innerText = dateBeforeLandingMessage;
        } else if(!checkDateIfAfter(dateLeaveInput.value, dateJoinInput.value)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = "Date leave cannot happen earlier than Date join";
            // errorDateLeave.innerText = dateLeaveBeforeJoinMessage;
        }
    }

    //password validation
    if(!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "This field is required";
        // errorPassword.innerText = fieldRequiredMessage;
    } else if(!checkTextLengthRange(passwordInput.value,1,200)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "This field has a character limit.";
        // errorPassword.innerText = characterLimitMessage;
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}