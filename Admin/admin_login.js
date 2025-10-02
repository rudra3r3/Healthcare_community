document.getElementById("login_btn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent form submit

    let username = document.getElementById("username").value.trim();
    let password = document.getElementById("password").value.trim();

    // Fetch the JSON file
    fetch("admins.json")
        .then(response => response.json())
        .then(data => {
            // Check if username + password match any entry
            let validUser = data.find(user => user.username === username && user.password === password);

            if (validUser) {
                alert("Login successful! Redirecting...");
                window.location.href = "admin_dashboard2.html"; 
            } else {
                alert("Invalid username or password. Try again.");
            }
        })
        .catch(error => {
            console.error("Error loading admins.json:", error);
            alert("Unable to log in right now. Please try later.");
        });
});

  // Theme toggle from dashboard2
    const themeToggle = document.getElementById('theme-toggle');
    function updateAria() {
      const isDark = document.body.classList.contains('dark-mode');
      themeToggle.setAttribute('aria-checked', isDark ? 'true' : 'false');
    }
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

    window.addEventListener('DOMContentLoaded', () => {
      gsap.from('.card-icon', {
        scale: 0,
        rotate: 360,
        duration: 1,
        ease: 'back.out(2)',
      });
      const card = document.querySelector('.card');
      card.addEventListener('mouseenter', () => {
        gsap.to(card.querySelector('.card-icon'), {
          rotation: 20,
          scale: 1.15,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to(card, {
          boxShadow: '0 16px 32px var(--shadow-color)',
          y: -8,
          duration: 0.3,
        });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card.querySelector('.card-icon'), {
          rotation: 0,
          scale: 1,
          duration: 0.25,
          ease: 'power1.inOut',
        });
        gsap.to(card, {
          boxShadow: '0 10px 30px var(--shadow-color)',
          y: 0,
          duration: 0.2,
        });
      });

      const passwordInput = document.getElementById('password');
      const togglePasswordBtn = document.querySelector('.toggle-password');
      let passwordVisible = false;
      togglePasswordBtn.addEventListener('click', () => {
        passwordVisible = !passwordVisible;
        passwordInput.type = passwordVisible ? 'text' : 'password';
        togglePasswordBtn.innerHTML = passwordVisible
          ? '<i class="far fa-eye-slash"></i>'
          : '<i class="far fa-eye"></i>';
        gsap.fromTo(
          togglePasswordBtn,
          { scale: 1, rotate: 0 },
          {
            scale: 1.25,
            rotate: 30,
            yoyo: true,
            repeat: 1,
            duration: 0.18,
            ease: 'power1.inOut',
          }
        );
      });
      togglePasswordBtn.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          togglePasswordBtn.click();
        }
      });
    });
