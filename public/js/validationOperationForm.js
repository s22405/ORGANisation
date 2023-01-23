function validateForm() {
    let landingDate = "5500-04-05";
    let valid = true;

    const willingOrganDonorInput = document.getElementById('WillingOrganDonor');
    const doctorInput = document.getElementById('Doctor');
    const organInput = document.getElementById('Organ');
    const successfulInput = document.getElementById('Successful');
    const bedNumberInput = document.getElementById('BedNumber');
    const operationTimestampInput = document.getElementById('OperationTimestamp');

    const errorWillingOrganDonor = document.getElementById('errorWillingOrganDonor');
    const errorDoctor = document.getElementById('errorDoctor');
    const errorOrgan = document.getElementById('errorOrgan');
    const errorSuccessful = document.getElementById('errorSuccessful');
    const errorBedNumber = document.getElementById('errorBedNumber');
    const errorOperationTimestamp = document.getElementById('errorOperationTimestamp');
    const errorsSummary = document.getElementById('errorsSummary');

    resetErrors([willingOrganDonorInput,doctorInput,organInput,successfulInput,bedNumberInput,operationTimestampInput], [errorWillingOrganDonor, errorDoctor, errorOrgan, errorSuccessful, errorBedNumber, errorOperationTimestamp], errorsSummary)

    //willingOrganDonor validation
    /*TODO "placeholder value" still counts as a value and doesn't return an error
        this is the case for willingOrganDonor, Doctor, Organ
     */
    if(!checkRequired(willingOrganDonorInput.value)) {
        valid = false;
        willingOrganDonorInput.classList.add("error-input");
        errorWillingOrganDonor.innerText = "The field is required.";
    } else if(willingOrganDonorInput.value === 0) {
        valid = false;
        willingOrganDonorInput.classList.add("error-input");
        errorWillingOrganDonor.innerText = "The field is required.";
    }

    //doctor validation
    if(!checkRequired(doctorInput.value)) {
        valid = false;
        doctorInput.classList.add("error-input");
        errorDoctor.innerText = "The field is required.";
    }

    //organ validation
    if(!checkRequired(organInput.value)) {
        valid = false;
        organInput.classList.add("error-input");
        errorOrgan.innerText = "The field is required.";
    }

    //successful validation
    //TODO none needed? Potential error?

    //bedNumber validation
    //TODO checkNumber validation seems pointless here since the field is a number. API call?
    if(!checkRequired(bedNumberInput.value)) {
        valid = false;
        bedNumberInput.classList.add("error-input");
        errorBedNumber.innerText = "The field is required.";
    } else if(!checkNumberRange(bedNumberInput.value,1,99)) {
        valid = false;
        bedNumberInput.classList.add("error-input");
        errorBedNumber.innerText = "This number should be between 1 and 99.";
    }

    //operationTimestamp validation
    //TODO regex validation seems pointless here since the field is a date. API call?
    if(!checkRequired(operationTimestampInput.value)) {
        valid = false;
        operationTimestampInput.classList.add("error-input");
        errorOperationTimestamp.innerText = "The field is required.";
    } else if(!checkDateIfAfter(operationTimestampInput.value, landingDate)) {
        valid = false;
        operationTimestampInput.classList.add("error-input");
        errorOperationTimestamp.innerText = "The operation cannot happen before the landing date (" + landingDate + ")";
    }

    if(!valid) {
        errorsSummary.innerText = "Form contains errors.";
    }

    return valid;
}