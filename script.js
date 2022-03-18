//Other Variables
var start = document.getElementById('#start');
//Timer variables
var timerEl = document.querySelector(".timer");
var start = document.getElementById("#start");
var timeLeft = 70;

//Quiz variables
var question = document.getElementById("#question");
var answerOne = document.getElementById("#a");
var answerTwo = document.getElementById("#b");
var answerThree = document.getElementById("#c");
var answerFour = document.getElementById("#d");
var correctAnswer = document.getElementById("#answer");

var questionnaire = [
    {
        query: "which one is a?",
        a: "a",
        b: "b",
        c: "c",
        d: "d",
        answer: "a",
    },
    {
        query: "which one is 7?",
        a: "4",
        b: "bt",
        c: "7",
        d: "d",
        answer: "c",   
    },
];

var questionnaireIndex = questionnaire.length - 1;
var currQuestionIndex = 0;

//function quizGame() {
//    var questions = questionnaire[currQuestionIndex];
//        question.textContent = questions.query;
//        answerOne.textContent = questions.a;
//        answerTwo.textContent = questions.b;
//        answerThree.textContent = questions.c;
//        answerFour.textContentet = questions.d;
//    
//        document.body.appendChild(question);
 //       console.log(questions.query);
//};

//function quizGame() {
//    for (var i=0; i<questionnaire.length; i++) {
//        question = questionnaire[i].query;
//        a = questionnaire[i].a;
//        b = questionnaire[i].b;
//        c = questionnaire[i].c;
//        d = questionnaire[i].d;
//    }    
//        question.text(prompt);
        
//        console.log(questionnaire[i].query);
//        console.log(questionnaire[i].a);
//        console.log(questionnaire[i].b);
//        console.log(questionnaire[i].c);
 //       console.log(questionnaire[i].d);
    
    
//};

//quizGame();

//var questionOne = ["what are bees?", "Aliens", "Plants", "Insects", "Rocks", "Insects"];
//var questionTwo = ["Pineapple on pizza?", "Yes!", "No!", "Ew, what?", "I'm calling the cops...", "Yes!"];
//var questionnaire = [questionOne, questionTwo];

//var optionOne = document.getElementById('#a1')
//var optionTwo = document.getElementById('#a2')
//var optionThree = document.getElementById('#a3')
//var optionFour = document.getElementById('#a4')

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

