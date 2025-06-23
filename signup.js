function signup() {
  const username = document.getElementById("signup-username").value.trim();
  const password = document.getElementById("signup-password").value;
  const messageDiv = document.getElementById("message");

 
  if (!username || !password) {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.className = "";
    return;
  }

  
  const existingUser = localStorage.getItem("user:" + username);
  if (existingUser) {
    messageDiv.textContent = "Username already taken.";
    messageDiv.className = "";
    return;
  }

 
  localStorage.setItem("user:" + username, JSON.stringify({ username, password }));
  messageDiv.textContent = "Signup successful!";
  messageDiv.className = "success";

  document.getElementById("signupForm").reset();
}


if (typeof module !== "undefined") {
  module.exports = { signup };
}
