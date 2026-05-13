//Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    
    burger.addEventListener("click", () => {
        
        //Toggle Navigation
        nav.classList.toggle("nav-active");
    
        //Animate Links
            navLinks.forEach((link, index) => {
                if(link.style.animation) {
                    link.style.animation = "";
                    } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
                }
        });

        //Burger Animation
        burger.classList.toggle("toggle");

    });
}

    navSlide();





//Questions
const questions = [
    "Argentina",
    "Bolivia",
    "Brazil",
    "Chile",
    "Colombia",
    "Ecuador",
    "French Guiana",
    "Guyana",
    "Paraguay",
    "Peru",
    "Suriname",
    "Uruguay",
    "Venezuela"
];





//Question Logic
let currentIndex = 0;
let score = 0;
let startTime;
let timerInterval;

const questionBox = document.getElementById("questionBox");
const scoreBox = document.getElementById("scoreBox");
const timeBox = document.getElementById("timeBox");
states = document.querySelectorAll(".state");

function showQuestion() {
    if (currentIndex >= questions.length) {
        endQuiz();
        return;
    }

    questionBox.textContent = questions[currentIndex].toUpperCase();
}





//Score Logic
states.forEach(state => {
    state.addEventListener("click", () => {
        if (!quizStarted) return;

        const clicked = state.dataset.name;
        const correct = questions[currentIndex];

        if (clicked === correct) {
            score++;
        }

        scoreBox.textContent = `${score}/${questions.length}`;
        currentIndex++;
        showQuestion();
    });
});





//Timer Logic
function startTimer() {
    startTime = Date.now();

    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timeBox.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
}





//Start Quiz
let quizStarted = false;

document.getElementById("startButton").addEventListener("click", () => {
    quizStarted = true;
    document.getElementById("startOverlay").style.display = "none";
    
    startTimer();
    showQuestion();
});





//End Quiz
function endQuiz() {
    clearInterval(timerInterval);
    questionBox.textContent = "QUIZ COMPLETE";
}
