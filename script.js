
/* =====================================
   1. LIGHT MODE
===================================== */

function setLight() {

    // Add light-mode class to body

    document.body.classList.add("light-mode");

    // Show a message

    document.getElementById("button-message").textContent =
        "☀️ Light Mode Activated";

}


/* =====================================
   2. DARK MODE
===================================== */

function setDark() {

    // Remove light-mode class from body

    document.body.classList.remove("light-mode");

    // Show a message

    document.getElementById("button-message").textContent =
        "🌙 Dark Mode Activated";

}


/* =====================================
   3. SOCIAL BUTTON FUNCTION
===================================== */

function showMessage(buttonName) {

    // Find the message area

    const message =
        document.getElementById("button-message");

    // Display clicked button name

    message.textContent =
        buttonName + " button clicked!";

}
