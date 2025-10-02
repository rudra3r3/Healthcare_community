document.addEventListener('DOMContentLoaded', function () {

  // --- Sign Up Button Logic ---
  const signUpButton = document.getElementById('signup_btn');
  if (signUpButton) {
    signUpButton.addEventListener("click", function(event) {
      event.preventDefault(); // Prevent form from submitting for now
      // Optional: Add validation logic here
      console.log("Sign up button clicked!");
      // window.location.href = "frontpage.html"; // You can re-enable this later
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

    themeToggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        themeToggle.click();
      }
    });
    updateAria();
  }

  // --- Reusable Password Visibility Toggle Logic ---
  document.querySelectorAll('.toggle-password').forEach(button => {
    button.addEventListener('click', () => {
      // The input is inside the same parent div, so we find it like this
      const passwordInput = button.previousElementSibling;
      
      if (passwordInput && (passwordInput.type === 'password' || passwordInput.type === 'text')) {
        // Toggle the input type
        const currentType = passwordInput.getAttribute('type');
        passwordInput.setAttribute('type', currentType === 'password' ? 'text' : 'password');

        // Toggle the eye icon class
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-eye');
        icon.classList.toggle('fa-eye-slash');
      }
    });
  });

});