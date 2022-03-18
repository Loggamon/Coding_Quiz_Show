var button = document.getElementById('#button');


button.innerHTML = "text!";

function createButton() {
    var buttonTwo = document.createElement("<button>");

    buttonTwo.textContent = "BLAH BLAH";

    document.body.appendChild(buttonTwo);
};

createButton();