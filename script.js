var timerEl = document.querySelector(".timer");
var start = document.querySelector("#start")
var timeLeft = 70;


//function startCountdown(event) {
   // event.preventDefault();

    var timerInterval = setInterval(function() {
        timeLeft--;

        if (timeLeft > 1) {
            console.log(timeLeft + " seconds!");
            timerEl.textContent = timeLeft;  
        } else if (timeLeft === 1) {
            console.log(timeLeft + " second!");
            timerEl.textContent = timeLeft;
        } else if (timeLeft === 0) {
            clearInterval(timerInterval);
            console.log("Game Over!");
            timerEl.textContent ="Game Over!";
        }

    }, 1000);    
//}

//start.addEventListener("click", startCountdown)