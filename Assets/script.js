// 1. add a timer when start quiz button is clicked and present user with first question
// 2. after user answers question, present the next question.
// 3. if the user answers question incorrectly, deduct time from timer.
// 4. end game when all questions are answered or the time reaches 0
// 5. let user log initials and score after game is over

//DOM manipulation 
var timeLeft = document.getElementById("seconds");
var startButton = document.getElementById("startButton");
var choiceButtons = document.getElementsByClassName("choiceButton");
var container1 = document.getElementById("container1");
var questionEl = document.getElementById("questionEl");
var userInfo = document.getElementById("name");
var subButton = document.getElementById("submit");
var finalScore = document.getElementById("scoreText");
document.getElementById("credentials").style.display = "none";
document.getElementById("submit").style.display = "none";

var score = 0;
var questionIndex = 0;


//Define a set of Questions with choices and answer
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['a. <js>', 'b. <javascript>', 'c. <scripting>', 'd. <script>'],
        answer: 'd. <script>'
    },
    {
        question: 'Arrays in Javascript can be used to store ______',
        choices: ['a. numbers and strings', 'b. booleans', 'c. other arrays', 'd. all of the above'],
        answer: 'd. all of the above'
    },
    {
        question: 'To see if two variables are equal in an if/else statement you would use _____',
        choices: ['a. =', 'b. ==', 'c. equals', 'd. !='],
        answer: 'b. =='
    },
    {
        question: 'The first index of an array is _____',
        choices: ['a. 0', 'b. 3', 'c. 2', 'd. 1'],
        answer: 'a. 0'
    },
    {
        question: 'Commonly used data types DO NOT include:',
        choices: ['a. alerts', 'b. numbers', 'c. booleans', 'd. strings'],
        answer: 'a. alerts'
    },
    // added empty properties to allow my endQuiz function to work properly
    {
        question: "",
        choices: "",
        answer: ""
    }


];
//sets total time for quiz
totalTime = 90;
//function to start time interval 
function startTime() {
    startButton.style.display = "none"
    var startInterval = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime;
        //stops quiz when time reaches 0
        if (totalTime === 0 || questions.length - 1 === questionIndex) {
            clearInterval(startInterval);
            endQuiz();
        }
        ;

    }, 1000);
}

// starts quiz after start button event is clicked
function newQuiz() {
    totalTime.value = timeLeft;
    startTime();
    nextQuestion();
    container1.style.display = "block";
    document.getElementById("quizInfo").style.display = "none";
    
}

// inputs multiple choice answers from the questions array into buttons
function nextQuestion() {
    questionEl.textContent = questions[questionIndex].question;
    for (i = 0; i < choiceButtons.length; i++) {
        choiceButtons[i].textContent = questions[questionIndex].choices[i];
    }

    if (questions.length - 1 === questionIndex) {
        endQuiz();
    }
    console.log(questionIndex)

}

// deducts time if user selects the wrong answer
function isCorrect(event) {
    if (event.target.textContent !== questions[questionIndex].answer) {
        totalTime = totalTime - 10;
        questionIndex++;
        nextQuestion();
    }
    else {
        rightAnswer()
        questionIndex++;
        nextQuestion();
    }

}


function checkAnswers(event) {
    isCorrect(event);

}

// function that runs if user selects the button with the correct answer
function rightAnswer() {
    score += 1;
    document.getElementById("score").innerHTML = score;
}

function endQuiz() {
    container1.style.display = "none";
    document.getElementById("credentials").style.display = "block";
    document.getElementById("submit").style.display = "block";
    document.getElementById("time").style.display = "none";

}

function showScore() {
    document.getElementById("nameInput").style.display = "none";
    userInfo.setAttribute("style", " color:green; font-size: 50px; border-style: hidden; ");
    subButton.style.display = "none"
    document.getElementById("score").style.fontSize = "50px";
    document.getElementById("scoreText").style.fontSize = "50px";
    
}

// event listner to save user initials and high score. See application tab in dev tools
subButton.addEventListener("click", function () {
    // var userInfo = document.getElementById("name");

    var initials = userInfo.value;

    console.log(initials);

    let userIn = {
        userName: initials,
        highScore: score
    }
    localStorage.setItem("userIn", JSON.stringify(userIn));

    showScore()
});

// starts the quiz
startButton.addEventListener("click", newQuiz);

// created a for loop because event listeners wont work on arrays
for (i = 0; i < choiceButtons.length; i++) {
    choiceButtons[i].addEventListener("click", checkAnswers)

}

