// Edit ONLY whatever is in " " , first goes the key pressed, then the URL to redirect to.



document.addEventListener("keydown", function(event) {
    const keyMap = {
        "c": "https://canvas.inspirededucationschools.com", // Redirect on pressing 'R'
        "g": "",  // Redirect on pressing 'G'
        "y": ""  // Redirect on pressing 'Y'
    };

    const key = event.key.toLowerCase();
    if (keyMap[key]) {
        window.location.href = keyMap[key];
    }
});
