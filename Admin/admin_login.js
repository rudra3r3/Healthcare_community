document.getElementById("login_btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submit

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Fetch the JSON file
    fetch("admins.json")
        .then(response => response.json())
        .then(data => {
            // Check if username + password match any entry
            let validUser = data.find(user => user.username === username && user.password === password);

            if (validUser) {
                alert("Login successful! Redirecting...");
                window.location.href = "admin_dashboard.html"; 
            } else {
                alert("Invalid username or password. Try again.");
            }
        })
        .catch(error => {
            console.error("Error loading admins.json:", error);
            alert("Unable to log in right now. Please try later.");
        });
});
