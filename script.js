function toggleMenu() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

// Close menu when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.menu-icon')) {
        let menu = document.getElementById("dropdownMenu");
        if (menu.classList.contains("show")) {
            menu.classList.remove("show");
        }
    }
}

// *****LOGIN PAGE *****

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if(username === "admin"&& password === "1111"){
        message.style.color = "green";
        message.textContent = "Login successful!";
        window.location.href = "doctor.html"
    } 
    else if(username === "admin"&& password === "2222"){
        message.style.color = "green";
        message.textContent = "Login successful!";
        window.location.href = "patient.html"

    }
    
    else {
        message.style.color = "red";
        message.textContent = "Invalid username or password.";
    }
});


// Logout code
function logout() {
//    localStorage clearInterval();
        window.location.href = "index.html";
}