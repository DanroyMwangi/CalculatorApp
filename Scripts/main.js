const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
    class Calculator{
        constructor(previousOperand, currentOperand){
            this.previousOperand = previousOperand;
            this.currentOperand = currentOperand;
        }
        operation(operator){
            this.operator = operator;
            console.log(this.operator);
        }
        appendNumber(number){
            if(this.currentOperand.innerHTML.includes(".") && number === ".")return;
            this.currentOperand.innerHTML+=number;
        }
    }
    function clearAll(){
        currentOperand.innerHTML = "";
        previousOperand.innerHTML = "";
        //
    }
    function erase(){
        var temp ="";
        for (var i = 0; i < (currentOperand.innerHTML).length-1; i++) {
            temp += currentOperand.innerHTML[i];
        }
        currentOperand.innerHTML = temp;
    }
    function arithmetic(button){

        //when you click a sign we need to store the value that has been displayed and clear the display after other current-operand have been pressed.
        var temp = "";
        if(button.classList.contains("l-bracket-btn")){
            currentOperand.innerHTML = currentOperand.innerHTML+"(";
            temp = currentOperand.innerHTML;
        }
        else if(button.classList.contains("r-bracket-btn")){
            currentOperand.innerHTML = currentOperand.innerHTML+")";
            temp = currentOperand.innerHTML;
        }
        else if(button.classList.contains("erase-btn")){
            
            
        }
    }
    const calculator = new Calculator(previousOperand,currentOperand);
    const numbers = document.querySelectorAll(".number-btn");
    numbers.forEach(number=>{
        number.addEventListener("click", (num)=>{
            calculator.appendNumber(number.innerHTML.trim());
        });
    });
    const operators = document.querySelectorAll(".operation-btn");
    operators.forEach(operator=>{
        operator.addEventListener("click",()=>{
            calculator.operation(operator.innerHTML.trim());
        });
    });