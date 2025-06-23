

describe('About Us Navbar', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <nav class="navbar">
                <ul class="nav-list">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="aboutus.html" class="active">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </nav>
        `;
    });

    it('renders all nav links', () => {
        const links = Array.from(document.querySelectorAll('.nav-list a')).map(a => a.textContent.trim());
        expect(links).toEqual(['Home', 'Services', 'Gallery', 'About Us', 'Contact']);
    });

    it('highlights the About Us link', () => {
        const active = document.querySelector('.nav-list a.active');
        expect(active).not.toBeNull();
        expect(active.textContent.trim()).toBe('About Us');
    });
});
