// ===== BUTTON ANIMATION =====

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 180);
    });
});


// ===== SCROLL ANIMATION =====

const animatedElements = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-card, .service-card, .goal, .contact-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

animatedElements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});


// ===== TYPING EFFECT =====

const typingText = document.getElementById("typing-text");

const texts = [
    "Future Web Developer 💻",
    "HTML & CSS Learner 🚀",
    "JavaScript Learner ⚡"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentText = texts[textIndex];

    if (!deleting) {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

        setTimeout(typeEffect, 90);

    } else {

        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        setTimeout(typeEffect, 50);
    }
}

typeEffect();


// ===== MOBILE MENU =====

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// Close menu after clicking a link

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===== DARK / LIGHT MODE =====

const themeBtn = document.getElementById("theme-btn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "🌙";
} else {
    themeBtn.textContent = "☀️";
}

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    } else {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    }
});
