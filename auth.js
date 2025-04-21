// User database
const users = {
    "plink_12": { password: "wannagame" },
    "dylbo": { password: "dylbonms" },
    "elisaisk": { password: "carlos_fallout" },
    "testuser1":{ password: "test1"},
    "testuser2":{ password: "test2"},
    "testuser3":{ password: "test3"},
    "testuser4":{ password: "test4"},
    "testuser5":{ password: "test5"},
    "testuser6":{ password: "test6"},
    "testuser7":{ password: "test7"},
    "testuser8":{ password: "test8"}
};

// Special code for redirection
const specialCode = "specialredirect";

// Authenticate user
function authenticate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Special redirection
    if (username === specialCode) {
        window.location.href = "havefun.html";
        return;
    }

    // Check user credentials
    if (users[username] && users[username].password === password) {
        localStorage.setItem("authenticated", "true");
        initializePage();
    } else {
        alert("Invalid credentials!");
    }
}

// Initialize page state
function initializePage() {
    if (localStorage.getItem("authenticated") === "true") {
        // Hide login form and show main content
        document.getElementById("login-container").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        document.getElementById("logout-button").style.display = "block"; // Show logout button
    }
}

// Logout function
function logout() {
    localStorage.removeItem("authenticated"); // Clear authentication state
    location.reload(); // Reload the page to reset view
}

// Function to handle redirection based on game folder and file
function redirectTo(folder, file) {
    // Redirect to the specified folder and file
    window.location.href = `${folder}/${file}`;
}

