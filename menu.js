function showmenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "0";
}

function hidemenu() {
    const navLinks = document.getElementById("navLinks");
    if (navLinks) navLinks.style.right = "-200px";
}

if (typeof module !== "undefined") {
    module.exports = { showmenu, hidemenu };
}