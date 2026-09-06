// Welcome message
console.log("Welcome to Ali Hassan Tech 🚀");

// Button animation
const buttons = document.querySelectorAll("a");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        button.style.transform = "scale(0.95)";

        setTimeout(() => {
            button.style.transform = "scale(1)";
        }, 150);
    });
});

