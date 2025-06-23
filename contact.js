document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('submit-form');
  const messageDiv = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();
      const name = document.getElementById('name').value.trim();
      const location = document.getElementById('location').value.trim();

      if (!name || !location) {
        messageDiv.textContent = "Please fill in both fields.";
        messageDiv.style.color = "#FFD700";
        return;
      }

      messageDiv.textContent = `Thank you, ${name} from ${location}, for contacting us!`;
      messageDiv.style.color = "#00FF99";
      form.reset();
    });
  }
});
