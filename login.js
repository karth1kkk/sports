function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "karthik" && password === "123") {
        alert("Login successful");
        localStorage.setItem("username", username);
        console.log("Redirecting to index.html"); // Debugging statement

    } else {
        alert("Login successful");
        localStorage.setItem("username", username);
    }
}


function home(){
    window.location.href = 'index.html';
}

        // Retrieve username from URL query parameters
        const username = localStorage.getItem("username");

        // Debugging statement to check the value of username
        console.log("Username:", username);

        // Display username in the element with class name "dash"
        const dashElement = document.querySelector('.form-control mb-1');
        if (username) {
            dashElement.textContent = "Welcome, " + username + "!";
            // Optionally, you can also add it as an HTML content
            // dashElement.innerHTML = "Welcome, " + username + "!";
        } else {
            dashElement.textContent = "DASHBOARD";
        }
        