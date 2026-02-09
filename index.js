class Calculator {
    constructor() {
        this.displayElement = document.querySelector('.calculator-display');
        this.display = "0";
        this.firstOperand = null;
        this.secondOperand = null;
        this.operator = null;
        this.isDecimalUsed = false;
    }

    set firstOperand(value) {
       if (this.operator === null) { return; }
       this._firstOperand = value;
       this.display = value;
    }

    get firstOperand() {
        return this._firstOperand;
    }

    set display(value) {
        this._display = value;
        this.displayElement.textContent = value;
        
    }



    get display() {
        return this._display;
    }

}

