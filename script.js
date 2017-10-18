let el 		  = document.querySelector("#calc-body .calc-data-btn");
let operation = document.querySelector("#calc-body .calc-operation-btn") 
let calculate = document.querySelector("#calc-body .calc-operation-btn .equal");
let display   = document.querySelector("#calc-body .display .data");
let num		  = "0";
let firstNum,secondNum,func;

// initialize data 
display.textContent = num;
num 				= "";

el.addEventListener("click",(e) => {
	if(e.target.className === "data"){
		num += e.target.innerText;
		display.textContent = num;
	}	
})

operation.addEventListener("click",(e) => {
	if(e.target.className === "subtract"){
		checkFirstNumber(sub);		
	}
	else if(e.target.className === "addition"){
		checkFirstNumber(add);
	}
	else if(e.target.className === "multi"){
		checkFirstNumber(multiply);
	}
	else if(e.target.className === "divide"){
		checkFirstNumber(divide);
	}else if(e.target.className === "equal"){
		if((firstNum && !secondNum) || secondNum){
			secondNum = (+num)
			num = func(firstNum,secondNum).toString();
			display.textContent = num;
		}
		
	}
	else if(e.target.className === "reset"){
		display.textContent = "0";
		num = "";
	}
	else if(e.target.className === "rem"){
		if(num.length > 1){
			num 	 	        = num.slice(0,num.length-1);
			display.textContent = num;	
		}else{
			num 	            = "";
			display.textContent = 0;
		}
	}
})


function add(a,b)
{
	return a + b;
}

function sub(a,b)
{
	return a - b;
}

function multiply(a,b)
{
	return a * b;
}

function divide(a,b)
{
	return a / b;
}

function checkFirstNumber(operation){
	if(!firstNum || firstNum){
			firstNum = (+num);
			num = "";
			func = operation;
		}
}
