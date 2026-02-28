let currentStep = 0;
const steps = document.querySelectorAll(".step");
const progress = document.getElementById("progress");

function showStep(index) {
    steps.forEach(step => step.classList.remove("active"));
    steps[index].classList.add("active");
    progress.style.width = (index / (steps.length - 1)) * 100 + "%";
}

function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    }
}

function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

document.querySelectorAll(".stitch-card").forEach(card => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".info");
        info.style.display = info.style.display === "block" ? "none" : "block";
    });
});

function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === "correct") {
        result.textContent = "✅ Correct! Magic Ring is used to start amigurumi projects.";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Not quite. Try again!";
        result.style.color = "red";
    }
}

showStep(currentStep);