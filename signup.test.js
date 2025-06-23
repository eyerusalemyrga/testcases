const { signup } = require("./signup.js");

describe("Sign Up Feature", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="signupForm">
        <label for="signup-username">Username:</label>
        <input type="text" id="signup-username">
        <label for="signup-password">Password:</label>
        <input type="password" id="signup-password">
        <button type="submit">Sign Up</button>
      </form>
      <div id="message"></div>
    `;
    localStorage.clear();
  });

  test("Signup with valid fields stores user and shows success", () => {
    document.getElementById("signup-username").value = "testuser";
    document.getElementById("signup-password").value = "testpass";
    signup();

    const saved = JSON.parse(localStorage.getItem("user:testuser"));
    expect(saved.username).toBe("testuser");
    expect(saved.password).toBe("testpass");
    expect(document.getElementById("message").textContent)
      .toMatch(/success/i);
    expect(document.getElementById("message").className).toBe("success");
  });

  test("Signup with missing fields shows error", () => {
    document.getElementById("signup-username").value = "";
    document.getElementById("signup-password").value = "";
    signup();
    expect(document.getElementById("message").textContent)
      .toMatch(/fill in all fields/i);
    expect(document.getElementById("message").className).toBe("");
  });

  test("Signup with existing username shows error", () => {
    // First signup
    document.getElementById("signup-username").value = "user1";
    document.getElementById("signup-password").value = "pass1";
    signup();

    // Try again with same username
    document.getElementById("signup-username").value = "user1";
    document.getElementById("signup-password").value = "pass2";
    signup();

    expect(document.getElementById("message").textContent)
      .toMatch(/already taken/i);
    expect(document.getElementById("message").className).toBe("");
  });
});