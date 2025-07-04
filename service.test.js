

describe('Menu Toggle Functionality', () => {
    beforeEach(() => {
        
        document.body.innerHTML = `
            <ul class="nav-links" id="navLinks"></ul>
            <div class="hamburger"></div>
        `;
      
        require('./service.js');
    });

    it('toggles nav menu on hamburger click', () => {
        const navLinks = document.getElementById('navLinks');
        expect(navLinks.classList.contains('show')).toBe(false);
        window.toggleMenu();
        expect(navLinks.classList.contains('show')).toBe(true);
        window.toggleMenu();
        expect(navLinks.classList.contains('show')).toBe(false);
    });

    it('closes menu when clicking outside', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.add('show');
       
        const evt = new window.Event('click', { bubbles: true });
        document.body.dispatchEvent(evt);
        expect(navLinks.classList.contains('show')).toBe(false);
    });

    it('does not close menu when clicking inside nav', () => {
        const navLinks = document.getElementById('navLinks');
        navLinks.classList.add('show');
       
        const evt = new window.Event('click', { bubbles: true });
        navLinks.dispatchEvent(evt);
        expect(navLinks.classList.contains('show')).toBe(true);
    });
});
