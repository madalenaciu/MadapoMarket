function isFullNameValid(fullName) {

    var nameRegex = /^[a-zA-Z\s]+$/; // Regular expression to match only alphabetical characters and spaces
    return nameRegex.test(fullName);
}

function validateForm() {

    
    var form = document.getElementById('registrationForm');
    if (!form.checkValidity()) {
       alert('Please fill out all fields correctly.');
       return;
    }
    //Only characters validation full name field
    var fullName = document.getElementById('name').value;
    if (!isFullNameValid(fullName)) {
       alert('Please enter a valid full name with only alphabetical characters.');
       return;
    }
    
    // Age validation
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
  
    if (today.getMonth() < dob.getMonth() || (today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate())) {
      age--;
    }
  
    if (age < 18) {
      alert('You must be at least 18 years old to register.');
      age.focus();
      return;
    }
    // Password match validation
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      password.focus();
      return;
    }
  
  
    // If all validations pass, you can submit the form
    alert('Form submitted successfully!');
    form.submit();
  }