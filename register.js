document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // Perform validation if needed
    if (username.trim() === '' || password.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }
    
    // For demo purposes, just displaying the entered values
    alert("Registration successful!\nUsername: " + username + "\nPassword: " + password);
    window.open("login.html", "_self"); 
    
    // You can add further logic here, such as sending the data to a server for storage
});