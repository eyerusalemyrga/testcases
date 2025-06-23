
const { signin } = require("./signin.js");

describe("Sign In Feature", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="signinForm">
        <label for="signin-username">Username:</label>
        <input type="text" id="signin-username">
        <label for="signin-password">Password:</label>
        <input type="password" id="signin-password">
        <button type="submit">Sign In</button>
      </form>
      <div id="message"></div>
    `;
    localStorage.clear();
  
    localStorage.setItem("user:testuser", JSON.stringify({ username: "testuser", password: "pass123" }));
  });

  test("Sign in with correct credentials shows welcome message", () => {
    document.getElementById("signin-username").value = "testuser";
    document.getElementById("signin-password").value = "pass123";
    signin();
    expect(document.getElementById("message").textContent).toMatch(/welcome/i);
    expect(document.getElementById("message").className).toBe("success");
  });

  test("Sign in with wrong password shows error", () => {
    document.getElementById("signin-username").value = "testuser";
    document.getElementById("signin-password").value = "wrongpass";
    signin();
    expect(document.getElementById("message").textContent).toMatch(/invalid/i);
    expect(document.getElementById("message").className).toBe("");
  });

  test("Sign in with non-existent username shows error", () => {
    document.getElementById("signin-username").value = "nonuser";
    document.getElementById("signin-password").value = "pass123";
    signin();
    expect(document.getElementById("message").textContent).toMatch(/invalid/i);
    expect(document.getElementById("message").className).toBe("");
  });

  test("Sign in with empty fields shows error", () => {
    document.getElementById("signin-username").value = "";
    document.getElementById("signin-password").value = "";
    signin();
    expect(document.getElementById("message").textContent).toMatch(/fill in all fields/i);
    expect(document.getElementById("message").className).toBe("");
  });
});
