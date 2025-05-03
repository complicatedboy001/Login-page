document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.login-form');

    // Simulated list of users
    const users = [
        { username: "admin", password: "1234" },
        { username: "Abhinaw", password: "pass123" },
        { username: "Manvendra", password: "welcome" }
    ];

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const usernameInput = form.querySelector('input[placeholder="Username"]').value.trim();
        const passwordInput = form.querySelector('input[placeholder="Password"]').value.trim();

        if (!usernameInput || !passwordInput) {
            alert("Please enter both username and password.");
            return;
        }

        const userFound = users.find(user => user.username === usernameInput && user.password === passwordInput);

        if (userFound) {
            alert("Login successful!");
            // Redirect or further logic
            // window.location.href = "dashboard.html";
        } else {
            alert("Invalid username or password.");
        }
    });
});

  
