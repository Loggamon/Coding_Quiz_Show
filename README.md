# Coding_Quiz_Show
This is a browser-based quiz game, testing your knowledge of coding and its language. Ready to play?


Some big questions i need to figure out before i start:
    --How will i store/pull my different questions?
    --Order of elements in HTML


## Day_One
The most important thing to do is make sure all the different parts of the web page work individually before I linked it all together. So the first part to make was the timer. I was able to make it work, but it wasnt triggered by event listener...

## Day_Two
Today I'm going to work on the multiple-choice questions. For this it needs to do two things:
    -Cycle through each question upon input choice
    -Reward choosing the correct answer/punish the wrong answer

I am considering putting the question in an array: the question itself, 4 choices to choose from, and the answer. If i can assign each variable in the array to semantic elements on the HTML, the user can choose which array element is correct. At which point, once the correct answer is chosen, it wil switch to the new array.