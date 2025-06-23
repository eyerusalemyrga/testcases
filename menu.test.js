const { showmenu, hidemenu } = require("./menu.js");

describe("Menu toggle functions", () => {
    beforeEach(() => {
        document.body.innerHTML = `<div class="nav-links" id="navLinks"></div>`;
    });

    test("showmenu sets navLinks.style.right to '0'", () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "-200px";
        showmenu();
        expect(navLinks.style.right).toBe("0");
    });

    test("hidemenu sets navLinks.style.right to '-200px'", () => {
        const navLinks = document.getElementById("navLinks");
        navLinks.style.right = "0";
        hidemenu();
        expect(navLinks.style.right).toBe("-200px");
    });

    test("showmenu works after hidemenu and vice versa", () => {
        const navLinks = document.getElementById("navLinks");
        hidemenu();
        expect(navLinks.style.right).toBe("-200px");
        showmenu();
        expect(navLinks.style.right).toBe("0");
    });
});