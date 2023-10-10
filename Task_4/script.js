const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" }
];

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const securedContent = document.getElementById("secured-content");
const logoutButton = document.getElementById("logout");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (authenticateUser(username, password)) {
        showSecuredContent(username);
    } else {
        alert("Invalid login credentials");
    }
    loginForm.reset();
});

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;
    if (registerUser(newUsername, newPassword)) {
        alert("Registration successful. You can now log in.");
        registerForm.reset();
    } else {
        alert("Username already exists. Please choose a different username.");
    }
});

logoutButton.addEventListener("click", () => {
    hideSecuredContent();
});

function authenticateUser(username, password) {
    return users.some((user) => user.username === username && user.password === password);
}

function registerUser(username, password) {
    if (users.some((user) => user.username === username)) {
        return false;
    }
    users.push({ username, password });
    return true;
}
function showSecuredContent(username) {
    loginForm.classList.add("hidden");
    registerForm.classList.add("hidden");
    securedContent.classList.remove("hidden");
    securedContent.querySelector("h2").textContent = `Welcome, ${username}!`;
}
function hideSecuredContent() {
    securedContent.classList.add("hidden");
    loginForm.classList.remove("hidden");
    registerForm.classList.remove("hidden");
}