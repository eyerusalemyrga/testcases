function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}


window.toggleMenu = toggleMenu;


document.addEventListener('click', function(event) {
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');
    if (
        navLinks &&
        navLinks.classList.contains('show') &&
        navLinks.contains(event.target) &&
        hamburger.contains(event.target)
    ) {
        navLinks.classList.remove('show');
    }
});
