function validateForm() {
    let landingDate = "5500-04-05";
    let valid = true;

    const nameInput = document.getElementById('Name');
    const cellNumberInput = document.getElementById('CellNumber');
    const patientFromInput = document.getElementById('PatientFrom');
    const patientTillInput = document.getElementById('PatientTill');

    const errorName = document.getElementById('errorName');
    const errorCellNumber = document.getElementById('errorCellNumber');
    const errorPatientFrom = document.getElementById('errorPatientFrom');
    const errorPatientTill = document.getElementById('errorPatientTill');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([nameInput, cellNumberInput, patientFromInput, patientTillInput],[errorName, errorCellNumber, errorPatientFrom, errorPatientTill], errorsSummary);

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

    //cellNumber validation
    if(!checkRequired(cellNumberInput.value)) {
        valid = false;
        cellNumberInput.classList.add("error-input");
        errorCellNumber.innerText = "The field is required.";
    } else if(!checkNumberRange(cellNumberInput.value,1,99)) {
        valid = false;
        cellNumberInput.classList.add("error-input");
        errorCellNumber.innerText = "This number should be between 1 and 99";
    }


    //patientFrom validation
    //TODO regex validation seems pointless here since the field is a date. API call?
    if(!checkRequired(patientFromInput.value)) {
        valid = false;
        patientFromInput.classList.add("error-input");
        errorPatientFrom.innerText = "The field is required.";
    } else if(!checkDateIfAfter(patientFromInput.value, landingDate)) {
        valid = false;
        patientFromInput.classList.add("error-input");
        errorPatientFrom.innerText = "Date cannot be set before the landing date (" + landingDate + ")";
    }

    //patientTill validation
    //TODO regex validation seems pointless here since the field is a date. API call?
    if(!checkDateIfAfter(patientTillInput.value, landingDate)) {
        valid = false;
        patientTillInput.classList.add("error-input");
        errorPatientTill.innerText = "Date cannot be set before the landing date (" + landingDate + ")";
    } else if(!checkDateIfAfter(patientTillInput.value, patientFromInput.value)) {
        valid = false;
        patientTillInput.classList.add("error-input");
        errorPatientTill.innerText = "Patient death cannot happen before the patient is actually impriso- I mean admitted.";
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}