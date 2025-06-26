require("./contact.js");

describe("Contact Form", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <form id="submit-form">
        <label for="name">Name</label><br>
        <input type="text" id="name" placeholder="name" required>
        <br>
        <label for="location">Location</label>
        <br>
        <input type="text" id="location" placeholder="location" required>
        <br>
        <button type="submit">Submit</button>
        <div id="form-message"></div>
      </form>
    `;
   
    document.dispatchEvent(new Event("DOMContentLoaded"));
  });

  test("submits with valid input and resets the form", () => {
    const form = document.getElementById("submit-form");
    const nameInput = document.getElementById("name");
    const locationInput = document.getElementById("location");
    const messageDiv = document.getElementById("form-message");

    nameInput.value = "Jane Doe";
    locationInput.value = "Nairobi";

    
    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    expect(messageDiv.textContent).toMatch(/thank you, jane doe from nairobi/i);
    expect(messageDiv.style.color).toBe("rgb(0, 255, 153)");
    expect(nameInput.value).toBe("");
    expect(locationInput.value).toBe("");
  });

  test("shows error message if fields are empty", () => {
    const form = document.getElementById("submit-form");
    const nameInput = document.getElementById("name");
    const locationInput = document.getElementById("location");
    const messageDiv = document.getElementById("form-message");

    nameInput.value = "";
    locationInput.value = "";

    form.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));

    expect(messageDiv.textContent).toMatch(/please fill in both fields/i);
    expect(messageDiv.style.color).toBe("rgb(255, 215, 0)");
  });
});
