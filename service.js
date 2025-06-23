function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// Attach function to window for testing and global access
window.toggleMenu = toggleMenu;

// Optional: Close nav menu when clicking outside (mobile)
document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (
        navLinks &&
        navLinks.classList.contains('show') &&
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        navLinks.classList.remove('show');
    }
});