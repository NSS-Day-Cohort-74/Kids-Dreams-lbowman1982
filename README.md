# Events and Debugging Assessment

Time to assess how well you have learned to use the debugging tools in Chrome Dev Tools, and writing click event listeners. This application is to show kids with illnesses and the memories the would like to make. Celebrities sign up to help kids make memories.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Event Listeners to Create

1. When the kid name is clicked, it should display their wish.
1. When the celebrity name is clicked, it should display their sport.
1. The pairings list should should contain the pairing in the following format.
    ```html
    {child name} will be making memories with {celebrity name}, a {celebrity sport} star, by {child wish}
    ```

Below is an animation showing how the application should look when complete and how the event listeners should work.

<img src="./images/debugging-events-assessment.gif" width="700px">

## Setup

Your instruction team will provide a link for you to create your assessment repository. Once your repo is created, clone it to your machine.

1. Make sure you are in your `workspace` directory.
1. `git clone {github repo SSH string}`.
1. `cd` into the directory it creates.
1. `code .` to open the project code.
1. Use the `serve` command to start the web server.
1. Open the URL provided in Chrome.

Make sure your Developer Tools are open at all times while working on this project. Use the messages provided in the Console to determine what code needs to be fixed or implemented, and use breakpoints in the Sources tab to step through your code as you debug.

## Vocabulary and Understanding

Before you click the "Complete Assessment" button on the Learning Platform, add your answers below each question and make a commit.

1. When a child is clicked on in the browser, which module contains the code that will execute on that event happening? Can you explain the algorithm of that logic?
   
   > main.js is responsible for executing the code that is displayed on the DOM, the function Kids() must be invoked in main for the list of child names and the state stored in the dataset to be available to the click event listener located in the kids.js module in which once the kids() code runs this event listener can target the state in the dataset and display the information specified in the window alert. 

2. In the **Pairings** module, why must the `findCelebrityMatch()` function be invoked inside the `for..of` loop that iterates the kids array?
   
   > to pass into the parameters the object kid and the array celebrities as an argument, allowing the function to have access to those. 

3. In the **CelebrityList** module, can you describe how the name of the sport that the celebrity plays can be displayed in the window alert text?
   
   >using the method .alert to display the state stored in the dataset, only if the condition is met, the value of that state will appear in a window.  This state is targeted by passing in the argument of the interpolated sport property in which the value of that state is stored in the dataset element data-sport 

4. Can you describe, in detail, the algorithm that is in the `main` module?
   > the main module first imports the pairings, celebrities and kids.  Then the HTML is represented with the interpolated, above functions that represent the kids names and celebrities names list and the pairings list which is stored as state in order to allow the click events to display the correct information. 
