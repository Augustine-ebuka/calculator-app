## Calculator-app
the app consist of three files: the index.html, style.css and the script.js


### script.js
the script.js contain the whole logic of the calculator and i will like to share how i created it.

The Calculator class is a JavaScript class that represents a simple calculator. It has a number of methods that allow it to perform basic arithmetic operations, such as addition, subtraction, multiplication, and division.

The constructor method is a special method in JavaScript classes that is called when a new object is created from the class. It is used to initialize the object and set up any properties or state that the object needs.

In the Calculator class, the constructor method takes two arguments: previousOperandTextElement and currentOperandTextElement. These arguments are elements from the DOM that will be used to display the previous and current operands, respectively.

The constructor method sets the previousOperandTextElement and currentOperandTextElement properties of the Calculator object to the values of the arguments passed to the constructor. It also calls the allClear method, which resets the state of the calculator.

The other methods of the Calculator class perform various operations on the operands, such as deleting a digit, appending a number, choosing an operator, computing the result of an operation, and updating the display.

The updateDisplay method is used to update the display elements in the DOM with the current and previous operands, as well as the current operator. It uses the getDisplayNumber method to format the operands for display, and the innerText property to set the text of the display elements.

The Calculator class is used in the rest of the code you provided to create a calculator that can.

## Hoop Shot (basketball/)
A browser basketball shooting game. Open `basketball/index.html` in any browser, no build step.

- Press on the court and pull back like a slingshot, then let go to shoot. A longer pull means more power.
- The dotted aim guide shows the arc. Switch it to Short or Off as you get better.
- After each miss the coach tells you what went wrong (too flat, short, long, rimmed out) and you stay on the same spot to adjust.
- Threes count 3 points and a swish (no rim, no backboard) adds a bonus point.
- Try the 60-second challenge once you're comfortable.
