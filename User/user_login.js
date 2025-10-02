{/* <button id="loginBtn">Login</button> */}


  document.getElementById("login_btn").addEventListener("click", function() {
    // Optional: Add validation logic here
    window.location.href = "patient_dashboard.html";
  });

const themeToggle = document.getElementById('theme-toggle');
  function updateAria() {
    themeToggle.setAttribute('aria-checked', document.body.classList.contains('dark-mode'));
  }
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    updateAria();
  });
  themeToggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      themeToggle.click();
    }
  });
  updateAria();

  document.querySelectorAll('.toggle-password').forEach(button => {
    let passwordVisible = false;
    button.addEventListener('click', () => {
      passwordVisible = !passwordVisible;
      const input = button.previousElementSibling;
      input.type = passwordVisible ? 'text' : 'password';
      button.innerHTML = passwordVisible ? '<i class="far fa-eye-slash"></i>' : '<i class="far fa-eye"></i>';
      gsap.fromTo(button, 
        { scale: 1, rotation: 0 }, 
        { scale: 1.25, rotation: 30, yoyo: true, repeat: 1, duration: 0.18, ease: "power1.inOut" });
    });
    button.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        button.click();
      }
    });
  });