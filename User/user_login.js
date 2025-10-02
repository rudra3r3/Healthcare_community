document.addEventListener('DOMContentLoaded', function () {

  // --- Login Button Logic ---
  const loginButton = document.getElementById('login_btn');
  if (loginButton) {
    loginButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form from submitting for now
      console.log("Login button clicked!");
      // window.location.href = "patient_dashboard.html"; // You can re-enable this later
    });
  }

  // --- Reusable Theme Toggle Logic ---
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const updateAria = () => {
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
    };
    themeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      updateAria();
    });
    updateAria();
  }

  // --- Reusable Password Visibility Toggle Logic ---
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      const passwordInput = button.previousElementSibling;
      if (passwordInput) {
        const currentType = passwordInput.getAttribute('type');
        passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      }
    });
  });

});