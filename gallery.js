function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}
function scrollLeft(rowId) {
  document.getElementById(rowId).scrollBy({
    left: -300,
    behavior: 'smooth'
  });
}
function scrollRight(rowId) {
  document.getElementById(rowId).scrollBy({
    left: 300,
    behavior: 'smooth'
  });
}


window.toggleMenu = toggleMenu;
window.scrollLeft = scrollLeft;
window.scrollRight = scrollRight;


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
