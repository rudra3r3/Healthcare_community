const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        themeToggle.setAttribute('aria-label', 'Activate light mode');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        themeToggle.setAttribute('aria-label', 'Activate dark mode');
    }
}
let savedTheme = localStorage.getItem('theme');
setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
themeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('dark-mode'));
});
const announcements = [
    " Monitor water quality in real-time!",
    " Smart alerts for safer communities.",
    " Protecting lives during monsoons.",
    " Accurate, explainable outbreak detection."
];
document.getElementById('announcement').textContent =
    announcements[Math.floor(Math.random()*announcements.length)];
const techSteps = document.querySelectorAll('.tech-step');
const techImg = document.getElementById('tech-img-display');
techSteps.forEach((step, idx) => {
    // Function to handle the image and alt text update
    const updateTechDisplay = () => {
        techImg.src = step.dataset.img;
        
        // --- IMPROVEMENT ---
        // Update alt text for accessibility
        const titleText = step.querySelector('h3').textContent;
        techImg.alt = `Illustration for ${titleText}`;
        
        techSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    };

    step.addEventListener('mouseenter', updateTechDisplay);
    step.addEventListener('focus', updateTechDisplay);
    step.setAttribute('tabindex', 0);
});
techSteps[0].classList.add('active');
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        featureCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });
    card.addEventListener('click', () => {
        featureCards.forEach(c => c.classList.remove('active'));
        card.classList.add('active');
    });
    card.setAttribute('tabindex', 0);
    card.addEventListener('focus', () => card.classList.add('active'));
    card.addEventListener('blur', () => card.classList.remove('active'));
});
document.getElementById('year').textContent = new Date().getFullYear();
const navList = document.getElementById('nav-list');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
mobileMenuToggle.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    
    // --- IMPROVEMENT ---
    // Update ARIA attribute for accessibility
    mobileMenuToggle.setAttribute('aria-expanded', isOpen);
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) {
        navList.classList.remove('open');
        
        // --- IMPROVEMENT ---
        // Ensure ARIA attribute is correct on resize
        mobileMenuToggle.setAttribute('aria-expanded', false);
    }
});
const navLinks = document.querySelectorAll('.nav-list a');
function setActiveLink() {
    // Offset by nav height + a small buffer
    const fromTop = window.scrollY + 85; 
    navLinks.forEach(link => {
        // Guard against null/undefined section
        try {
            const section = document.querySelector(link.hash);
            if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        } catch (e) {
            // This catches invalid selectors from href="#"
            // console.warn(`Could not find section for link: ${link.hash}`);
        }
    });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();


// --- NEW: SMOOTH SCROLL FOR NAV LINKS ---
document.querySelectorAll('.nav-list a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Stop the default "jump"

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calculate offset (height of the sticky nav)
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 15; // 15px buffer

            // Use the smooth scroll method
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // --- Bonus: Close mobile menu on click ---
            if (navList.classList.contains('open')) {
                navList.classList.remove('open');
                mobileMenuToggle.setAttribute('aria-expanded', false);
            }
        }
    });
});
// --- END OF NEW BLOCK ---


const cursor = document.getElementById('cursor-main');
const trail = document.getElementById('cursor-trail');

let cursorX = window.innerWidth/2, cursorY = window.innerHeight/2;
let trailX = window.innerWidth/2, trailY = window.innerHeight/2;
let cursorTimeout;

function moveCursor(e) {
    cursorX = e.clientX;
    cursorY = e.clientY;
    gsap.to(cursor, { x: cursorX, y: cursorY, duration: 0.21, ease: "power3.out" });
    gsap.to(trail, { x: trailX, y: trailY, duration: 0.45, ease: "power2.out" });

    clearTimeout(cursorTimeout);
    cursor.style.opacity = 1;
    trail.style.opacity = 0.3;
    cursorTimeout = setTimeout(() => {
        cursor.style.opacity = 0.7;
        trail.style.opacity = 0.08;
    }, 2100);
}
window.addEventListener('mousemove', moveCursor);
gsap.ticker.add(() => {
    trailX += (cursorX - trailX) * 0.19;
    trailY += (cursorY - trailY) * 0.19;
    gsap.set(trail, { x: trailX, y: trailY });
});

const interactiveSelectors = ['a', 'button', '.toggle-button', '.feature-card', '.card', '.nav-list li'];
interactiveSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
        el.addEventListener('mouseenter', () => {
            gsap.to(cursor, { scale: 2.2, background: "#fff", boxShadow: "0 0 40px 10px #0891b2" });
            gsap.to(trail, { scale: 2.8, borderColor: "#fff" });
        });
        el.addEventListener('mouseleave', () => {
            gsap.to(cursor, { scale: 1, background: body.classList.contains('dark-mode') ? "#0891b2" : "#0891b2", boxShadow: "0 0 18px 6px rgba(8,145,178,.15)" });
            gsap.to(trail, { scale: 1, borderColor: "#0891b2" });
        });
    });
});

gsap.from(".logo", { scale: 0.6, opacity: 0, duration: 1, ease: "expo.out", delay: 0.1 });
gsap.from("h1", { y: 60, opacity: 0, duration: 1.2, ease: "expo.out", delay: 0.4 });
gsap.from(".lead", { y: 60, opacity: 0, duration: 1.05, ease: "expo.out", delay: 0.7 });
gsap.from(".announcement", { y: 30, opacity: 0, duration: 1, ease: "expo.out", delay: 1 });

gsap.utils.toArray('.feature-card').forEach((card, i) => {
    gsap.from(card, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", delay: 1.2 + i * 0.1 });
});
gsap.utils.toArray('.card').forEach(card => {
    gsap.from(card, {
        scrollTrigger: { trigger: card, start: "top 90%", toggleActions: "play none none none" },
        opacity: 0, y: 60, duration: 1, ease: "power3.out"
    });
});
gsap.utils.toArray('.tech-step').forEach((step, i) => {
    gsap.from(step, {
        scrollTrigger: { trigger: step, start: "top 93%" },
        opacity: 0, x: -35, duration: 0.7 + i*0.13, ease: 'power2.out'
    });
});

if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = "none";
    trail.style.display = "none";
}

// --- CHATBOT ---
// (Leaving this as-is per your request)
// --- CHATBOT INTEGRATION ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Check for Elements
    const container = document.getElementById('chatbot-container');
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    const closeBtn = document.getElementById('chatbot-close-btn');
    const robotIcon = document.getElementById('chatbot-robot-icon');
    const chatInput = document.querySelector('.chatbot-input-area input');
    const sendBtn = document.querySelector('.chatbot-send-btn');
    const messagesContainer = document.getElementById('chatbot-messages');

    if (!container || !toggleBtn || !closeBtn) return;

    // 2. Chat History State (Required for context)
    let chatHistory = [];

    // 3. Helper: Add Message to UI
    function appendMessage(role, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `message ${role}`; // 'user' or 'bot'
        msgDiv.textContent = text;
        messagesContainer.appendChild(msgDiv);
        // Auto-scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    // 4. Core Function: Send Message to YOUR Backend
    async function sendMessage() {
        const text = chatInput.value.trim();
        if (!text) return;

        // A. Show User Message immediately
        appendMessage('user', text);
        chatInput.value = '';

        // B. Show "Thinking..." indicator
        const loadingDiv = document.createElement('div');
        loadingDiv.className = 'message bot';
        loadingDiv.textContent = '...';
        messagesContainer.appendChild(loadingDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;

        try {
            // C. Call your local server (index.js)
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    message: text,
                    // Send history in the format your index.js expects
                    history: chatHistory 
                })
            });

            const data = await response.json();
            
            // Remove loading indicator
            loadingDiv.remove();

            if (data.message) {
                // D. Show AI Response
                appendMessage('bot', data.message);

                // E. Update History (Gemini format to match your backend logic)
                // Add User Message
                chatHistory.push({
                    role: "user",
                    parts: [{ text: text }]
                });
                // Add AI Message ('model' converts to 'assistant' in your backend)
                chatHistory.push({
                    role: "model",
                    parts: [{ text: data.message }]
                });
            }
        } catch (err) {
            loadingDiv.textContent = "Error: Server not running.";
            console.error("Chat Error:", err);
        }
    }

    // 5. Event Listeners for Sending
    sendBtn.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    // --- GSAP Animation (Existing Logic) ---
    if (typeof gsap !== 'undefined') {
        const robotWiggle = gsap.timeline({ paused: true });
        robotWiggle
            .to(robotIcon, { duration: 0.1, rotation: -20, ease: 'power2.inOut' })
            .to(robotIcon, { duration: 0.1, rotation: 20, ease: 'power2.inOut' })
            .to(robotIcon, { duration: 0.1, rotation: 0, ease: 'power2.inOut' });

        toggleBtn.addEventListener('click', () => {
            robotWiggle.play(0);
            setTimeout(() => {
                container.classList.add('open');
                toggleBtn.setAttribute('aria-expanded', 'true');
            }, 150);
        });
    } else {
        // Fallback if GSAP fails
        toggleBtn.addEventListener('click', () => {
            container.classList.add('open');
        });
    }

    closeBtn.addEventListener('click', () => {
        container.classList.remove('open');
        toggleBtn.setAttribute('aria-expanded', 'false');
    });
});