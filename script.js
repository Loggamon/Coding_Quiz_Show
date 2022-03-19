//Other Variables
var startQuiz = document.querySelector('#startBtn');
var saveBtn = document.querySelector(".saveBtn");
var playerEl = document.querySelector("#playerEl")
//Timer variables
var timerEl = document.querySelector(".timer");
var start = document.getElementById("#start");
var timeLeft = 70;
var myInterval = -1
//Quiz variables
var question = document.querySelector("#question");
var answerOne = document.querySelector("#a");
var answerTwo = document.querySelector("#b");
var answerThree = document.querySelector("#c");
var answerFour = document.querySelector("#d");
//var correctAnswer = document.querySelector(questionnaire.correct);


var questionnaire = [
    {
        query: "which one is a?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        correct: "a",
    },
    {
        query: "which one is 7?",
        a: "4",
        b: "bt",
        c: "7",
        d: "d",
        correct: "c",   
    },
];
var answerSheet = ['a', '7'];

var questionnaireIndex = questionnaire.length - 1;
var currQuestionIndex = 0;



function quizBox(index) {
    event.preventDefault();
    document.querySelector('.quiz-container').style.display = 'flex';

        question.innerHTML = questionnaire[currQuestionIndex].query;
        a.innerHTML = questionnaire[currQuestionIndex].a;
        b.innerHTML = questionnaire[currQuestionIndex].b;
        c.innerHTML = questionnaire[currQuestionIndex].c;
        d.innerHTML = questionnaire[currQuestionIndex].d;
}    
answerOne.onclick = function() {
    if (answerOne.textContent === answerSheet[currQuestionIndex]) {
        console.log('sexy!');
        currQuestionIndex++;
        quizBox(currQuestionIndex);
    } else {
        console.log('yuck');
        timeLeft = timeLeft - 10;
    }
}
answerTwo.onclick = function() {
    if (answerTwo.textContent === answerSheet[currQuestionIndex]) {
        console.log('sexy!');
        
    } else {
        console.log('yuck');
        timeLeft = timeLeft - 10;
    }
}
    answerThree.onclick = function() {
    if (answerThree.textContent === answerSheet[currQuestionIndex]) {
        console.log('sexy!');    
    } else {
        console.log('yuck');
        timeLeft = timeLeft - 10;
    }
}
    answerFour.onclick = function() {
    if (answerFour.textContent === answerSheet[currQuestionIndex]) {
        console.log('sexy!');
    } else {
        console.log('yuck');
        timeLeft = timeLeft - 10;
    }
}


function startCountdown() {
    event.preventDefault();
    document.querySelector('.countdown').style.display = 'flex';

    var timerInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft > 1) {
            console.log(timeLeft + " seconds!");
            timerEl.textContent = timeLeft;  
        } else if (timeLeft === 1) {
            console.log(timeLeft + " second!");
            timerEl.textContent = timeLeft;
        } else if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.querySelector('.quiz-container').style.display = 'none';
            document.querySelector('.scoreBoard').style.display = 'flex';
            console.log("Game Over!");
            timerEl.textContent ="Game Over!";

        }
    }, 1000); 
    
    if (currQuestionIndex > questionnaire.length) {
        clearInterval(myInterval)
    }
};


function letsPlay(event) {
    event.preventDefault();
    startCountdown();
    quizBox();
};

startQuiz.addEventListener('click', letsPlay)
