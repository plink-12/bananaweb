// Hardcoded user database for multiple users
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

// Special code for redirecting
const specialCode = "specialredirect";

// Generic link for normal users
const genericLink = "https://jobi-is-sigma-fr.cychengda.com/";

// Authenticate user
function authenticate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Check for special code (redirect)
    if (username === specialCode) {
        window.location.href = "../havefun.html"; // Redirect to a different HTML file if special code is entered
        return;
    }

    // Normal authentication
    if (users[username] && users[username].password === password) {
        localStorage.setItem("authenticated", "true");
        localStorage.setItem("genericLink", genericLink);
        initializePage();
    } else {
        alert("Invalid credentials!");
    }
}

// Initialize page state
function initializePage() {
    if (localStorage.getItem("authenticated") === "true") {
        // Hide login and show game container
        document.getElementById("login-container").style.display = "none";
        document.getElementById("game-container").style.display = "block";

        let gameFrame = document.getElementById("gameFrame");
        let link = localStorage.getItem("genericLink");

        // Set the iframe's src to the generic link (load it inside the iframe)
        gameFrame.src = link;
    }
}

// Logout function
function logout() {
    localStorage.removeItem("authenticated");
    localStorage.removeItem("genericLink");
    window.location.reload();
}
