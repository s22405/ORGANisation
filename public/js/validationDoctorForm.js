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

    resetErrors([nameInput, dateJoinInput, dateLeaveInput, passwordInput], [errorName, errorDateJoin, errorDateLeave,errorPassword], errorsSummary);

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

    //dateJoin validation
    if(!checkRequired(dateJoinInput.value)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = "The field is required.";
    } else if(!checkDateIfAfter(dateJoinInput.value, landingDate)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = "Date join cannot be earlier than the landing date (" + landingDate + ")";
    }

    //dateLeave validation
    if(!(dateLeaveInput.value==null || dateLeaveInput.value=='')) { //issues with dateLeave being null
        console.log(dateLeaveInput);
        if(!checkDateIfAfter(dateLeaveInput.value, landingDate)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = "Date leave cannot be earlier than the landing date (" + landingDate + ")";
        } else if(!checkDateIfAfter(dateLeaveInput.value, dateJoinInput.value)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = "Date leave cannot be earlier than date join.";
        }
    }

    //password validation
    if(!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "The field is required.";
    } else if(!checkTextLengthRange(passwordInput.value,1,200)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = "This field should contain 1 to 200 characters.";
    }


    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}