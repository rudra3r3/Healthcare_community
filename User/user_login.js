document.getElementById("login_btn").addEventListener("click", function(event) {
    event.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let errorMsg = document.getElementById("error-msg");

    errorMsg.textContent = "";
    console.log("Trying login with:", email, password);

    if (!email || !password) {
        errorMsg.textContent = "Please enter both email and password.";
        return;
    }

    fetch("user.json")
        .then(response => {
            if (!response.ok) throw new Error("Could not fetch user.json");
            return response.json();
        })
        .then(data => {
            console.log("Loaded users:", data);
            const validUser = data.find(user => user.email === email && user.password === password);

            if (validUser) {
                console.log("Login successful:", validUser);
                localStorage.setItem("currentUser", JSON.stringify(validUser));
                window.location.href = "patient_dashboard.html";
            } else {
                console.log("Login failed");
                errorMsg.textContent = "Invalid email or password.";
            }
        })
        .catch(err => {
            console.error("Error fetching JSON:", err);
            errorMsg.textContent = "Login failed. Try again later.";
        });
});
