

describe('Gallery Navigation', () => {
  document.body.innerHTML = `
    <ul id="navLinks" class="nav-links"></ul>
    <div class="hamburger"></div>
    <div class="image-container" id="row1" style="overflow-x: auto;"></div>
  `;

  it('toggles nav menu on hamburger click', () => {
    require('./gallery.js');
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('show');
    window.toggleMenu();
    expect(navLinks.classList.contains('show')).toBe(true);
    window.toggleMenu();
    expect(navLinks.classList.contains('show')).toBe(false);
  });

  it('scrolls image container left and right', () => {
    require('./gallery.js');
    const row = document.getElementById('row1');
    row.scrollBy = jest.fn();
    window.scrollLeft('row1');
    expect(row.scrollBy).toHaveBeenCalledWith({ left: -300, behavior: 'smooth' });
    window.scrollRight('row1');
    expect(row.scrollBy).toHaveBeenCalledWith({ left: 300, behavior: 'smooth' });
  });
});
