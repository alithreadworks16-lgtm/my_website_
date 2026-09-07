// ===== BUTTON ANIMATION =====

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});


// ===== SCROLL ANIMATION =====

const cards = document.querySelectorAll(
    ".section, .skill-card, .project-card, .about-card, .goal, .contact-card"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    card.classList.add("hidden");
    observer.observe(card);
});


// ===== TYPING EFFECT =====

const typingText = document.getElementById("typing-text");

const text = "Future Web Developer 💻";

let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}

typeEffect();

// ===== MOBILE MENU =====

const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});
