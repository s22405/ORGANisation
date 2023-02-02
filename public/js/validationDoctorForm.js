function validateForm() {
    let landingDate = "5500-04-01";
    let valid = true;

    const nameInput = document.getElementById('name');
    const dateJoinInput = document.getElementById('nateJoin');
    const dateLeaveInput = document.getElementById('dateLeave');

    const errorName = document.getElementById('errorName');
    const errorDateJoin = document.getElementById('errorDateJoin');
    const errorDateLeave = document.getElementById('errorDateLeave');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, dateJoinInput, dateLeaveInput], [errorName, errorDateJoin, errorDateLeave], errorsSummary);

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
    if(!(dateLeaveInput==null)) {
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

    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}