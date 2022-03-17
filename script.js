//Timer variables
var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start");
var timeLeft = 70;

//Quiz variables
var question = document.querySelector("#question");
var answerOne = document.querySelector("#a");
var answerTwo = document.querySelector("#b");
var answerThree = document.querySelector("#c");
var answerFour = document.querySelector("#d");
var correctAnswer = document.querySelector("#answer");

var questionnaire = [
    {
        prompt: "which one is a?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "a",
    },
    {
        prompt: "which one is 7?",
        a: "4",
        b: "bt",
        c: "7",
        d: "d",
        answer: "c",   
    },
];

function quizGame() {
    for (var i=0; i<questionnaire.length; i++) {
        console.log(questionnaire[i].prompt);
        console.log(questionnaire[i].a);
        console.log(questionnaire[i].b);
        console.log(questionnaire[i].c);
        console.log(questionnaire[i].d);
    }
};

//var questionOne = ["what are bees?", "Aliens", "Plants", "Insects", "Rocks", "Insects"];
//var questionTwo = ["Pineapple on pizza?", "Yes!", "No!", "Ew, what?", "I'm calling the cops...", "Yes!"];
//var questionnaire = [questionOne, questionTwo];

//var optionOne = document.querySelector('#a1')
//var optionTwo = document.querySelector('#a2')
//var optionThree = document.querySelector('#a3')
//var optionFour = document.querySelector('#a4')

console.log(questionnaire)
console.log(questionnaire[0]);
console.log(questionnaire[1]);


//function startCountdown(event) {
   // event.preventDefault();

    var timerInterval = setInterval(function() {
        timeLeft--;

        if (timeLeft > 1) {
            //console.log(timeLeft + " seconds!");
            timerEl.textContent = timeLeft;  
        } else if (timeLeft === 1) {
           // console.log(timeLeft + " second!");
            timerEl.textContent = timeLeft;
        } else if (timeLeft === 0) {
            clearInterval(timerInterval);
            //console.log("Game Over!");
            timerEl.textContent ="Game Over!";
        }

    }, 1000);    
//}
quizGame()
//start.addEventListener("click", startCountdown)