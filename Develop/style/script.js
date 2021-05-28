var quizQuestions = [{"question":"What is the result of 5 + '3'", "options": ["53", "8", "35"], "correctAnswer": "53"},
                 {"question": "What will the console output from the following code? console.log(3 + '2' + '1');", "options":["321", "6", "33"], "correctAnswer": "321"},
                 {"question": "What divs will be selected in the following css code?(.container) ", "options":["All divs", "the first div", "The div with the class container"], "correctAnswer": "The div with the class container"},
                 {"question": "What will be output in the console with the following code? console.log(' ')", "options":[" ", "null", "undefined"]},
                 {"question": "How do you prompt a user with a yes or no question with a popup box?", "options":["alert(message)", "confirm(message)", "prompt(message)"], "correctAnswer": "confirm(message)"}]
var score = 0;
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var startQuizEl = document.getElementById('startQuiz');
var QuizEl = document.getElementById('Quiz');
var theQuestion = 0;
var timeRemaining = 0;
var quizTimer;
var yourGameIsOver = `
    <h3>GAME OVER</h3>
    <h4>Your score is ` + score + `points!</h4>
    <h4>Please enter your name for the Scoreboard!
    <input type=text id="name">
    <button onclick="postHighScore()">Submit Your Score!!!</button>
    <h4>If you want to try again click the Start Quiz button!</h4>`;
var nameEl = document.getElementById('name');

startQuizEl.addEventListener('click', startQuiz);

function questions() {
    var theOptions = questions[i].options;
    var theAnswer = questions[i].correctAnswer;
    var currentQuestion;
    
    theQuestion.textContent = questions[i].quizQuestion;
    answerEl.innerHTML = "";
    
    for(i=0; i<theOptions.length; i++) {

    }
    currentQueston++;
};


function countdown() {
    timeRemaining = 60;

    var timeInterval = setInterval(function() {
        timeRemaining--
        timerEl.textContent ="Time remaining: " + time;
        //add the questions to the if statement
        if(timeRemaining === 0) {
            gameOver();
        }
    }, 1000);
};

function startQuiz() {
    timeRemaining = 60;
    timerEl.innerHTML = timeRemaining;
    quizTimer = countdown();
    questionsEl.innerText = questions.quizQuestion;
    document.write(questions);
}

function gameOver() {
    clearInterval(timeRemaining);
    QuizEl.innerHTML = yourGameIsOver;
};

function postHighScore() {
    localStorage.setItem("score", score);
    localStorage.setItem("scoreName", nameEl);
}
