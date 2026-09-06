// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});


// Scroll reveal animation
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
