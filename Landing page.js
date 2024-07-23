document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;

    // Create object to store data
    var formData = {
        email: email,
        phone: phone
    };

    // Prepare data for export (in this case, logging to console)
    console.log(formData);

    // Clear form fields after submission
    document.getElementById('signupForm').reset();
});
