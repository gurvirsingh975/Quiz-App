//created an array with javascript questions
const questions = [
    {
        question: "What is JavaScript?",
        answers: ["A programming language", "A fruit", "A country", "A car"],
        correctIndex: 0,
    },
    { Question: 'Inside which HTML element do we put the JavaScript?' ,
      answers:[ '<scripting>' ,'<js>','<JavaScript>' ,'script' ],
      correctIndex:3 ,
},
{ Question: 'What is the correct syntax for referring to an external script called "xxx.js"? ',
 answers:['Script src="xxx.js" ','Script href="xxx.js" ','Script name="xxx.js" ','Script ="xxx.js" '],
   correctIndex: 0 ,
},
{ Question: 'How do you write "Hello World" in an alert box?' ,
answers:['Alert = "Hello World" ','alertBox("Hello World")','alert("Hello World")' ,'window.alert("Hello World")'],
 correctIndex: 1,

},
{ Question:'How do you create a function in JavaScript?' ,
answers:[ 'function.myfuction()','function=myfunction()','function myfunction()' , '()myfunction: function'],
 correctIndex: 2,
},


];


let currentQuestionIndex = 0;
let timer;
let timeRemaining = 60; 

const startButton = document.getElementById("start-btn");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const answerButtons = document.querySelectorAll(".answer-btn");
const timerDisplay = document.getElementById("timer");
const resultText = document.getElementById("result-text");
const initialsInput = document.getElementById("initials-input");
const submitScoreButton = document.getElementById("submit-score");
//added Eventlisteners
startButton.addEventListener("click", startQuiz);
answerButtons.forEach(button => button.addEventListener("click", checkAnswer));
submitScoreButton.addEventListener("click", saveScore);
//generated function StartQuiz
function startQuiz() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    timer = setInterval(updateTimer, 1000);
    showQuestion();
}
//generate function showQuestion
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    currentQuestion.answers.forEach((answer, index) => {
        answerButtons[index].textContent = answer;
    });
}

function checkAnswer(event) {
    const selectedAnswerIndex = Array.from(answerButtons).indexOf(event.target);
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedAnswerIndex === currentQuestion.correctIndex) {
        resultText.textContent = "Correct!";
    } else {
        resultText.textContent = "Incorrect!";
        timeRemaining -= 10; // Subtract 10 seconds for incorrect answer
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    clearInterval(timer);
    questionContainer.classList.add("hide");
    resultContainer.classList.remove("hide");
    timerDisplay.textContent = "Time: 0";
}

function updateTimer() {
    timerDisplay.textContent = `Time: ${timeRemaining}`;

    if (timeRemaining <= 0) {
        endQuiz();
    } else {
        timeRemaining--;
    }
}

function saveScore() {
    const initials = initialsInput.value.trim();

    if (initials !== "") {
    
        console.log(`Initials: ${initials}, Score: ${timeRemaining}`);
    } else {
        alert("Please enter your initials.");
    }
}