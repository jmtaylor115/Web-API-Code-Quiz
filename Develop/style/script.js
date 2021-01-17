var questions = [{"question":"What is the result of 5 + '3'", "options": ["53", "8", "35"], "correctAnswer": "53"},
                 {"question": "What will the console output from the following code? console.log(3 + '2' + '1');", "options":["321", "6", "33"], "correctAnswer": "321"},
                 {"question": "What divs will be selected in the following css code?(.container) ", "options":["All divs", "the first div", "The div with the class container"], "correctAnswer": "The div with the class container"},
                 {"question": "What will be output in the console with the following code? console.log(' ')", "options":[" ", "null", "undefined"]},
                 {"question": "How do you prompt a user with a yes or no question with a popup box?", "options":["alert(message)", "confirm(message)", "prompt(message)"], "correctAnswer": "confirm(message)"}]
var score = 0;
var timerEl = document.getElementById('timer');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers')
var theQuestion;


function questions() {
    var theOptions = questions[i].options;
    var theAnswer = questions[i].correctAnswer;
    var currentQuestion;
    
    theQuestion.textContent = questions[i].question;
    answerEl.innerHTML = "";
    
    for(i=0; i<theOptions.length; i++) {

    }
    currentQueston++;
}


function countdown() {
    var time = 180;

    var timeInterval = setInterval(function() {
        time--
        timerEl.textContent ="Time remaining: " + time;
        //add the questions to the if statement
        if(time == 0 || ) {

        }
    }, 1000);
}

