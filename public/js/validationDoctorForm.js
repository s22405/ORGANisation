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

    const reqMessageName = document.getElementById('errorName').innerText;
    const reqMessageDateJoin = document.getElementById('errorDateJoin').innerText;
    const reqMessageDateLeave = document.getElementById('errorDateLeave').innerText;
    const reqMessagePassword = document.getElementById('errorPassword').innerText;
    const reqMessageSummary = document.getElementById('errorsSummary').innerText

    resetErrors([nameInput, dateJoinInput, dateLeaveInput, passwordInput], [errorName, errorDateJoin, errorDateLeave,errorPassword], errorsSummary);

    //name validation
    if(!checkRequired(nameInput.value)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = reqMessageName;
    } else if(!checkTextLengthRange(nameInput.value,1,200)) {
        valid = false;
        nameInput.classList.add("error-input");
        errorName.innerText = reqMessageName;
    }

    //dateJoin validation
    if(!checkRequired(dateJoinInput.value)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = reqMessageDateJoin;
    } else if(!checkDateIfAfter(dateJoinInput.value, landingDate)) {
        valid = false;
        dateJoinInput.classList.add("error-input");
        errorDateJoin.innerText = reqMessageDateJoin;
    }

    //dateLeave validation
    if(!(dateLeaveInput.value==null || dateLeaveInput.value=='')) { //issues with dateLeave being null
        console.log(dateLeaveInput);
        if(!checkDateIfAfter(dateLeaveInput.value, landingDate)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = reqMessageDateLeave;
        } else if(!checkDateIfAfter(dateLeaveInput.value, dateJoinInput.value)) {
            valid = false;
            dateLeaveInput.classList.add("error-input");
            errorDateLeave.innerText = reqMessageDateLeave;
        }
    }

    //password validation
    if(!checkRequired(passwordInput.value)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = reqMessagePassword;
    } else if(!checkTextLengthRange(passwordInput.value,1,200)) {
        valid = false;
        passwordInput.classList.add("error-input");
        errorPassword.innerText = reqMessagePassword;
    }


    if(!valid) {
        errorsSummary.innerText = reqMessageSummary;
    }

    return valid;
}