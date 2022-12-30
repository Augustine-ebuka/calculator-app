class Calculator{
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.allClear();
    }
    allClear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operator = undefined;
    }
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        this.updateDisplay();
    }
 
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) {
            return
        } 
        this.currentOperand = this.currentOperand.toString() + number.toString();
        this.updateDisplay()
    }
    chooseOperator(operator) {
        if (this.currentOperand === '') {
            return 
        }
        if (this.previousOperand !== '') {
            this.compute();
        }
        this.operator = operator;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
        this.updateDisplay();
    }
    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const curr = parseFloat(this.currentOperand);
        if (isNaN(curr) || isNaN(prev)) {
            return
        }
        switch (this.operator) {
            case '+':
                computation = prev + curr;
                break;
        
            case '-':
                computation = prev - curr;
                break;
            case '*':
                computation = prev * curr;
                break;
            case '/':
                computation = prev / curr;
                break;
            
            default:
                return;
        }
        this.currentOperand = computation;
        this.operator = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }
    squareNum() {
        const curr = parseFloat(this.currentOperand);
        if (isNaN(curr)) {
            return
        }
        const computation = curr * curr;
        this.currentOperand = computation;
        this.operator = undefined;
        this.previousOperand = '';
        this.updateDisplay();
    }
    getDisplayNumber(num) {
        const numberStr = num.toString();
        const digitPart = parseFloat(numberStr.split('.')[0]);
        const decPart = numberStr.split('.')[1];
        let output;
        if (isNaN(digitPart)) {
            output = '';
        } else {
            output = digitPart.toLocaleString('en', {
            maximumFractionDigits: 0
            });
        }
    
        if (decPart != null) {
            return `${output}.${decPart}`;
        } else {
            return output;
        }
    }
    
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operator != null) {
            this.previousOperandTextElement.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operator}`;
        } else {
            previousOperandTextElement.innerText = '';
        }
    }
}

const operatorBtn = document.querySelectorAll('[data-operation]');
const numberBtn = document.querySelectorAll('[data-number]');
const equalsBtn = document.querySelector('[data-equals]');
const deletBtn = document.querySelector('[data-delete]');
const clearBtn = document.querySelector('[data-all-clear]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const squareBtn = document.querySelector('[data-square]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
       
    })
})
operatorBtn.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperator(button.innerText);
    })
})

equalsBtn.addEventListener('click', () => {
    calculator.compute();
})
clearBtn.addEventListener('click', () => {
    calculator.allClear();
    calculator.updateDisplay();
})
deletBtn.addEventListener('click', () => {
    calculator.delete();
})
squareBtn.addEventListener('click', () => { 
    calculator.squareNum();
})


