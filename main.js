function toggleDarkMode() {
    var bodyElement = document.getElementById("dark-mode");
    var darkModeBtn = document.getElementById("dark-mode-btn");

    // if in dark mode change to light mode

    if (bodyElement.style.backgroundColor === "black") {
        bodyElement.style.backgroundColor = "#f3e9dc" 
        darkModeBtn.innerHTML = "Dark Mode"       
    } 
    else {
        bodyElement.style.backgroundColor = "black"
        darkModeBtn.innerHTML = "Light Mode"
    }
}