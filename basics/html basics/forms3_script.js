function valName() {
    var nameInput = document.getElementById('name').value;
    if (nameInput.trim() === '') {
        alert('Please enter your name.');
        return false;
    }
    var regex = /^[a-zA-Z\s]+$/;
    if (!regex.test(nameInput)) {
        alert('Please enter a valid name with only letters and spaces.');
        return false;
    }
    return true;
}

function valEmail() {
    var emailInput = document.getElementById('email').value;

    // Regular expression for a simple email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email is not empty and matches the regular expression
    if (emailInput.trim() === '' || !emailRegex.test(emailInput)) {
        alert('Please enter a valid email address.');
        return false;
    }

    return true;
}

function valPhone() {
    var phoneNumberInput = document.getElementById('phone').value;

    // Regular expression for a simple phone number validation
    var phoneRegex = /^\d{10}$/;

    // Check if the phone number is not empty and matches the regular expression
    if (phoneNumberInput.trim() === '' || !phoneRegex.test(phoneNumberInput)) {
        alert('Please enter a valid 10-digit phone number.');
        return false;
    }
    return true;
}