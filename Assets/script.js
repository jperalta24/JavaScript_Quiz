// User Story
// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers
// Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score

// 1. add a timer when start quiz button is clicked and present user with first question
// 2. after user answers question, present the next question.
// 3. if the user answers question incorrectly, deduct time from timer.
// 4. end game when all questions are answered or the time reaches 0
// 5. let user log initials and score after game is over

//DOM manipulation 
var timeLeft = document.getElementById("seconds");
var startbuttn = document.getElementById("bttn1");
var questionIndex = 0;
var answersIndex = 0;
var answerButtons = document.getElementsByClassName("answerButton");
var container1 = document.getElementById("container1");
var questionEl = document.getElementById("questionEl");

window.document;
console.log(document);
console.log(timeLeft);

//Define a set of Questions
var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        choices: ['a. <js>', 'b. <javascript>', 'c. <scripting>', 'd. <script>'],
        answer: 'd. <script>'
    },
    {
        question: 'Arrays im Javascript can be used to store ______',
        choices: ['a. numbers and strings', 'b. booleans', 'c. other arrays', 'd. all of the above'],
        answer: 'd. all of the above'
    },
    {
        question: 'To see if two variables are equal in an if/else statement you would use _____',
        choices: ['a. =', 'b. ==', 'c. equals' , 'd. !='],
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
    }

];
//sets total time for quiz
totalTime = 90;
//function to start time interval 
function startTime() {
    startbuttn.style.display = "none"
    var startInterval = setInterval(function () {
        totalTime--;
        timeLeft.textContent = totalTime;
        //stops quiz when time reaches 0
        if (totalTime === 0) {
            clearInterval(startInterval);
        }
        ;

    }, 1000);
}



function newQuiz() {
    questionIndex = 0;
    totalTime.value = timeLeft;
    startTime();
    nextQuestion();
    container1.style.display = "block";


    console.log(timeLeft);

}

function nextQuestion() {
    questionEl.textContent = questions[questionIndex].question
    console.log(answerButtons);
    // questionIndex++;
    
   
    for (i = 0; i < answerButtons.length; i++) {
        answerButtons[i].textContent = questions[questionIndex].choices[answersIndex];
        answersIndex++;
    };
}


startbuttn.addEventListener("click", newQuiz);

for (i = 0; i < answerButtons.length; i++) {
    answerButtons[i].addEventListener("click", nextQuestion);
}