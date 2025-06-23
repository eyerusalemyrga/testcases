function signin() {
  const username = document.getElementById("signin-username").value.trim();
  const password = document.getElementById("signin-password").value;
  const messageDiv = document.getElementById("message");

  if (!username || !password) {
    messageDiv.textContent = "Please fill in all fields.";
    messageDiv.className = "";
    return;
  }

 
  const userData = localStorage.getItem("user:" + username);
  if (!userData) {
    messageDiv.textContent = "Invalid username or password.";
    messageDiv.className = "";
    return;
  }

  const user = JSON.parse(userData);
  if (user.password === password) {
    messageDiv.textContent = "Welcome, " + username + "!";
    messageDiv.className = "success";
  } else {
    messageDiv.textContent = "Invalid username or password.";
    messageDiv.className = "";
  }
}


if (typeof module !== "undefined") {
  module.exports = { signin };
}