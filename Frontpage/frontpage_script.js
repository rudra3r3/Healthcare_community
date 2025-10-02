const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(isDark) {
    if (isDark) {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
}
let savedTheme = localStorage.getItem('theme');
setTheme(savedTheme ? savedTheme === 'dark' : prefersDark);
themeToggle.addEventListener('click', () => {
    setTheme(!body.classList.contains('dark-mode'));
});
const announcements = [
    "🌦 Monitor water quality in real-time!",
    "🛡 Smart alerts for safer communities.",
    "💧 Protecting lives during monsoons.",
    "🔎 Accurate, explainable outbreak detection."
];
document.getElementById('announcement').textContent =
    announcements[Math.floor(Math.random()*announcements.length)];
const techSteps = document.querySelectorAll('.tech-step');
const techImg = document.getElementById('tech-img-display');
techSteps.forEach((step, idx) => {
    step.addEventListener('mouseenter', () => {
        techImg.src = step.dataset.img;
        techSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    });
    step.addEventListener('focus', () => {
        techImg.src = step.dataset.img;
        techSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    });
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
    navList.classList.toggle('open');
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 750) navList.classList.remove('open');
});
const navLinks = document.querySelectorAll('.nav-list a');
function setActiveLink() {
    const fromTop = window.scrollY + 85;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
}
window.addEventListener('scroll', setActiveLink);
setActiveLink();

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