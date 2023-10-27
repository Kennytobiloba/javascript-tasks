function signup(event) {
    event.preventDefault();
    const target = event.target;
    const form = new FormData(target);
    const FullName = form.get("FullName")?.trim()
    const Username = form.get("Username")?.trim()
    const Email = form.get("Email")?.trim()
    const password = form.get("password")?.trim()

    localStorage.setItem("Username", Username);
    localStorage.setItem("password", password);
    localStorage.setItem("Email", Email);
    localStorage.setItem("FullName", FullName);

    if (!Username || !password  || !Email || !FullName) {
        document.getElementById("message").innerHTML = "Error: Please fill in all fields.";
        document.getElementById("message").style.color = "red";
    } else {
        
        document.getElementById("message").innerHTML = "Registration successful!";
        document.getElementById("message").style.color = "green";
        window.location.href = "login.html";
    }

    return false; // Prevent the form from submitting
}

window.onload = function() {
    const savedUsername = localStorage.getItem("Username");
    const savedPassword = localStorage.getItem("password");

    if (savedUsername && savedPassword) {
        document.getElementById("Username").value = savedUsername; // Use "Username" here
        document.getElementById("password").value = savedPassword; // Use "password" here
    }
};
    

function login(event) {
    event.preventDefault();
    const form = event.target;
    const Username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUsername = localStorage.getItem("Username");
    const savedPassword = localStorage.getItem("password");

    const message = document.getElementById("message");

    if (!Username || !password) {
        message.innerHTML = "Error: Please fill in all fields.";
        message.style.color = "red";
    } else if (Username !== savedUsername || password !== savedPassword) {
        message.innerHTML = "Error: Invalid credentials.";
        message.style.color = "red";
    } else {
        form.reset();
        message.innerHTML = "Login successful!";
        message.style.color = "green";
        window.location.href = "Dashboard.html";
    }
}





document.addEventListener("DOMContentLoaded", function() {
    
    const userEmail = localStorage.getItem("Username");

    
    const userEmailElement = document.getElementById("UserName");
    if (userEmailElement) {
        userEmailElement.textContent = userEmail;
    }
});
