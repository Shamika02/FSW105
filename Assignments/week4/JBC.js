const readLineSync=require('readline-sync')

let num1 = readLineSync.questionInt("enter first number")
let num2 = readLineSync.questionInt("enter second number")
let operator = readLineSync.question("What operation are you performing  +, -, / or * ")



function myTotal(ss1){
    if (operator== "+"){
        console.log(addTwoNum(num1,num2))
    }else if(operator== "-"){
        console.log(subTwoNum(num1,num2))
    }else if(operator== "/"){
        console.log(divdTwoNum(num1,num2))
    }else if(operator== "*"){
        console.log(mulTwoNum(num1,num2))
    }else{
        operator = readLineSync.question("not a valid entry please enter   +, -, / or * :  ")  
       myTotal(operator)
    }
}


function addTwoNum(var1,var2){
    return "Adding " + var1 + " and " + var2 + " gives you: " + (var1 + var2)
}

function subTwoNum(var1,var2){
    return "Subtraction " + var1 + " and " + var2 + " gives you: " + (var1 - var2)
}
function divdTwoNum(var1,var2){
    return "Subtraction " + var1 + " and " + var2 + " gives you: " + (var1 / var2)
}
function mulTwoNum(var1,var2){
    return "Subtraction " + var1 + " and " + var2 + " gives you: " + (var1 * var2)
}
myTotal(operator)