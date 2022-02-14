const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");
    class Calculator{
        constructor(previousOperand, currentOperand){
            this.previousOperand = previousOperand;
            this.currentOperand = currentOperand;
        }
        operation(operator){
            this.operator = operator;
        }
        appendNumber(number){
            
        }
    }
    function clear(){
        currentOperand.innerHTML = "";
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
        else if(button.classList.contains("multiplication-btn")){
            
            currentOperand.innerHTML = currentOperand.innerHTML+"*";
            temp = current-operand.innerHTML;
        }
        else if(button.classList.contains("erase-btn")){
            for (var i = 0; i < (currentOperand.innerHTML).length-1; i++) {
                temp += currentOperand.innerHTML[i];
            }
            currentOperand.innerHTML = temp;
        }
    }
    const numbers = document.querySelectorAll(".number-btn");
    numbers.forEach(number=>{
        number.addEventListener("click", (num)=>{
            console.log(num.currentTarget.innerHTML.trim());
        });
    });
    const operations = document.querySelectorAll(".operation-btn");
    operations.forEach(operation=>{
        console.log(operation.innerHTML.trim());
    });