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

/* Stitch Card Toggle */
document.querySelectorAll(".stitch-card").forEach(card => {
    card.addEventListener("click", () => {
        const info = card.querySelector(".info");
        info.style.display = info.style.display === "block" ? "none" : "block";
    });
});

/* QUIZ SYSTEM */

const quizData = [
    {
        question: "Which stitch is used to start most amigurumi projects?",
        answers: ["Double Crochet", "Magic Ring", "Half Double Crochet"],
        correct: 1
    },
    {
        question: "What is the foundation stitch of most crochet projects?",
        answers: ["Chain Stitch", "Single Crochet", "Magic Ring"],
        correct: 0
    },
    {
        question: "How many loops are on your hook before finishing a Half Double Crochet?",
        answers: ["2 loops", "3 loops", "4 loops"],
        correct: 1
    },
    {
        question: "Which stitch is taller: Single Crochet or Double Crochet?",
        answers: ["Single Crochet", "Double Crochet", "They are equal"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const resultEl = document.getElementById("result");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.textContent = currentQuiz.question;
    answersEl.innerHTML = "";
    resultEl.textContent = "";
    nextQuestionBtn.style.display = "none";

    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.style.display = "block";
        button.style.margin = "10px 0";
        button.onclick = () => selectAnswer(index);
        answersEl.appendChild(button);
    });
}

function selectAnswer(index) {
    const correctIndex = quizData[currentQuestion].correct;

    if (index === correctIndex) {
        resultEl.textContent = "✅ Correct!";
        resultEl.style.color = "green";
        score++;
    } else {
        resultEl.textContent = "❌ Incorrect!";
        resultEl.style.color = "red";
    }

    nextQuestionBtn.style.display = "block";
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showFinalScore();
    }
}

function showFinalScore() {
    questionEl.textContent = "Quiz Completed!";
    answersEl.innerHTML = "";
    nextQuestionBtn.style.display = "none";
    resultEl.textContent = You scored ${score} out of ${quizData.length}!;
    resultEl.style.color = "blue";
}

showStep(currentStep);
loadQuestion();