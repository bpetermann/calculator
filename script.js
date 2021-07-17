const screen = document.getElementById("screen")
const buttons =document.getElementsByClassName("button");
const clear = document.getElementById("clear")
const number = Array.from(document.getElementsByClassName("number"));
const operator = Array.from(document.getElementsByClassName("operation"));
const equals = document.getElementById("equals")
const point = document.getElementById("point")

let numString = "";
let num1 = "";
let num2 = "";
let op = "";
let dot = 0;



number.forEach(number => {
    number.addEventListener("click", (e)=>{
        
    if (e.target.innerText === "." && dot === 0){
        ++dot;
        }
    else if (e.target.innerText === "." && dot > 0){
        return; 
    }
    else if(numString.length > 9){
    numString = numString.substring (0,9);
    }
    numString += e.target.innerText;
    num2 = parseFloat(numString, 10);
    screen.innerText = numString;

  })
 });

operator.forEach(operation =>{
    operation.addEventListener("click", (e)=>{ 
    if(!numString) {return}
    else if(num1 && op && num2 || num1 == 0 && op && num2)
    {
    operate(num1,op,num2);
    numString = screen.innerText;
    num1 = parseFloat(numString, 10);
    numString = "";
    op = e.target.innerText;
    dot = 0;
    return
   }
    else{
    op = e.target.innerText;
    num1 = parseFloat(numString, 10);
    dot = 0;
    numString = "";
    return;}
  })
});

equals.addEventListener("click", ()=>{
    if(num1 && op && num2|| num1 == 0 && op && num2)
    {
    operate(num1,op,num2);
    numString = screen.innerText;
    num1 = parseFloat(numString, 10);
    op = "";
    dot = 0;
   }
   else if(op == "/" && num2 == 0)
   {alert("Impossible")}
   else {return};
});

clear.addEventListener("click", ()=>{
screen.innerText = "";
num1 = "";
num2 = "";
numString ="";
op = "";
dot = 0;
});

const add = function(num1,num2){
    let c = num1+num2
    return c;
}

const subtract = function(num1,num2) {
	return num1-num2;
};

const multiply = function(num1,num2) {
	return num1*num2;
};

const divide = function(num1,num2) {
	return num1/num2;
};



function operate(num1,op,num2){
    if (op === "+"){
        screen.innerText = add(num1,num2)
        if(screen.innerText.length > 9){
            screen.innerText = parseFloat(screen.innerText, 10).toExponential(5)};
    }
    else if (op === "-"){
        screen.innerText = subtract(num1,num2)
        if(screen.innerText.length > 9){
            screen.innerText = parseFloat(screen.innerText, 10).toExponential(5)};
    }
    else if (op === "x"){
        screen.innerText =  multiply(num1,num2)
        if(screen.innerText.length > 9){
            screen.innerText = parseFloat(screen.innerText, 10).toExponential(5)};
    }
    else if (op === "/"){
        screen.innerText =  divide(num1,num2)
        if(screen.innerText.length > 9){
            screen.innerText = parseFloat(screen.innerText, 10).toExponential(5)};
    }
};
