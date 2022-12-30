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
