//Other Variables
var startQuiz = document.querySelector('#startBtn');
var saveBtn = document.querySelector(".saveBtn");
var playerEl = document.querySelector("#playerEl");
var titleText = document.querySelector('#title')
var savedInitials = document.querySelector("#savedInit")
var savedScore = document.querySelector("#savedScore")
var HSList = document.getElementById("#HSList")
var highScores = [];
//Timer variables
var timerEl = document.querySelector(".timer");
var start = document.getElementById("#start");
var timeLeft = 70;
var totalTime = timeLeft
//Quiz variables
var question = document.querySelector("#question");
var answerOne = document.querySelector("#a");
var answerTwo = document.querySelector("#b");
var answerThree = document.querySelector("#c");
var answerFour = document.querySelector("#d");
//var questionnaireIndex = questionnaire.length - 1;
//var currQuestionIndex = 0


//var correctAnswer = document.querySelector(questionnaire.correct);


var questionnaire = [
    {
        query: "A style sheet is saved as what kind of document?",
        a: "CSS",
        b: "JS",
        c: "HTML",
        d: "CAS",
        correct: "CSS",
    },
    {
        query: "When referencing a Javascript sheet, where in the HTML does it need to be?",
        a: "Right at the top",
        b: "Right at the bottom",
        c: "You dont need to link it to the HTML",
        d: "Only where you use it",
        correct: "Right at the bottom",   
    },
    {
        query: "Which one of these are not semantic elements?",
        a: "section",
        b: "div",
        c: "nav",
        d: "article",
        correct: "div",   
    },
    {
        query: "Why would one include alt-atributes to HTML elements?",
        a: "They like to put in the work",
        b: "They like to make sure they have as much info as possible",
        c: "So that those with visual impairments can understand through screenreaders",
        d: "So they can keep track of which elements they included",
        correct: "So that those with visual impairments can understand through screenreaders",   
    },
    {
        query: "Is coding fun??",
        a: "Yes!",
        b: "No...",
        c: "Is this a coding question...?",
        d: "I thought this was a personality quiz!",
        correct: "Yes!",   
    }    
];
var answerSheet = ['CSS', 'Right at the bottom', 'div', 'So that those with visual impairments can understand through screenreaders', 'Yes!'];

var questionnaireIndex = questionnaire.length - 1;
var currQuestionIndex = 0;



function quizBox(index) {
    event.preventDefault();
    startQuiz.style.display = "none";
    document.querySelector('.quiz-container').style.display = 'flex';

    console.log(currQuestionIndex)

    question.innerHTML = questionnaire[currQuestionIndex].query;
    a.innerHTML = questionnaire[currQuestionIndex].a;
    b.innerHTML = questionnaire[currQuestionIndex].b;
    c.innerHTML = questionnaire[currQuestionIndex].c;
    d.innerHTML = questionnaire[currQuestionIndex].d;
    
    answerOne.onclick = function() {
        if (answerOne.textContent === answerSheet[currQuestionIndex]) {
            console.log('yay!');
            currQuestionIndex++;
            quizBox(currQuestionIndex);
        } else {
            console.log('yuck');
            timeLeft = timeLeft - 10;
        }

        if (currQuestionIndex > questionnaireIndex) {
            console.log('yipee')
           
        }
    }
    answerTwo.onclick = function() {
        if (answerTwo.textContent === answerSheet[currQuestionIndex]) {
            console.log('yay!');
            currQuestionIndex++;
            quizBox(currQuestionIndex)
        } else {
            console.log('yuck');
            timeLeft = timeLeft - 10;
        }

        if (currQuestionIndex > questionnaireIndex) {
            console.log('yipee');
            
        }
    }
    answerThree.onclick = function() {
        if (answerThree.textContent === answerSheet[currQuestionIndex]) {
            console.log('yay!');
            currQuestionIndex++;
            quizBox(currQuestionIndex)    
        } else {
            console.log('yuck');
            timeLeft = timeLeft - 10;
        }
        if (currQuestionIndex > questionnaireIndex) {
            console.log('yipee');
            //var totalTime =stop(timeLeft);
            //console.log(totalTime);
        }
    }
    answerFour.onclick = function() {
        if (answerFour.textContent === answerSheet[currQuestionIndex]) {
            console.log('yay!');
            currQuestionIndex++;
            quizBox(currQuestionIndex)
        } else {
            console.log('yuck');
            timeLeft = timeLeft - 10;
        }
        if (currQuestionIndex > questionnaireIndex) {
            console.log('yipee');
            //var totalTime = stop(timeLeft);
            //console.log(totalTime);
        }
    }
    //if (currQuestionIndex > questionnaireIndex) {
    //    clearInterval()
    //    console.log('FINISHED')
    //}
    //console.log(questionnaireIndex[currQuestionIndex]);
}

function showHighScore() {
    document.querySelector(".scoreSubmit").style.display = "none";
    document.querySelector(".scoreBoard").style.display = "flex";

    scoreListEl = JSON.parse(localStorage.getItem("highScores"));
    savedInitials.textContent = scoreListEl.player;
    savedScore.textContent = scoreListEl.score;

    //for (var i = 0; i , scoreListEl.length; i++) {
    //    var highScore = scoreListEl[i];

    //    var li = document.createElement("li");
    //    li.textContent = highScore;
        //li.setAttribute("data-index", i);

    //    HSList.appendChild(li);
    //}

    console.log(scoreListEl.player)
    console.log(scoreListEl.score)

    backBtn.addEventListener("click", function() {
        document.querySelector('.quiz-container').style.display = 'none';
        document.querySelector('.scoreBoard').style.display = 'none';
        startQuiz.style.display = "flex";

        resetValues();
    }
)}

function setHighScore () {
   localStorage.setItem("highScores", JSON.stringify(highScores));
}

function highScore() {
    //event.preventDefault();
    document.querySelector('.quiz-container').style.display = 'none';
    document.querySelector('.scoreSubmit').style.display = 'flex';
    saveBtn.addEventListener('click', function() {
        
        highScoreInput = {
            player: playerEl.value,
            score: timeLeft,
        };
    
        highScores.push(highScoreInput);
        
        
        setHighScore();
        showHighScore();
    }
)}

function init() {

    var scoreListEl = JSON.parse(localStorage.getItem("highScores"))

    document.querySelector("#savedInit").innerHTML = scoreListEl.player;
    document.querySelector("#savedScore").innerHTML = scoreListEl.score;
}

//------------------------------------------------------------------------------------------------------------------------------------------------------

function startCountdown() {
    event.preventDefault();
    document.querySelector('.countdown').style.display = 'flex';

    timeLeft = 70;

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
            titleText.innerHTML = "Nice Try!"
        }
        if (currQuestionIndex > questionnaireIndex) {
            console.log(totalTime)
            clearInterval(timerInterval);
            titleText.innerHTML = "High Scores"
            highScore() ;   
        }
    }, 1000); 
};

function letsPlay(event) {
    event.preventDefault();
    startCountdown();
    quizBox();
}; 

startQuiz.addEventListener('click', letsPlay)

function resetValues() {
    questionnaireIndex = questionnaire.length - 1;
     currQuestionIndex = 0;
    
    totalTime = timeLeft;
}
