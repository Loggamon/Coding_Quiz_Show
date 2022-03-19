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

## Day_Three
Yesterday, i ran into a problem.

I assigned temporary questions into an array as an object with properties. Console-logging the specific properties seemed to work, yet I am unable to assign the strings as text-content to the buttons, and I'm unsure why.

I'm going to try and plug away and figure this out. Maybe i need to create button elements with the text-content assigned to them...

## Day_Four
I have decided to move on from the multiple-choice funstion for now.

Instead, I have plugging away at the CSS, in order for everything to be ready aesthetically.

Next, I have to link up the start button with the rest of the functions so that they actually swap through without refreshing the page.

After a lot of head-scratching, i was finally able to get the multiple-choice questions to cycle through! now that the questions are done, the time is timing, and the style is picked out for the page, the last thing I'll need to do is the local Storage... tomorrow morning.