let timeBreakSelector = document.querySelector(".time-break");
let timeWorkSelector  = document.querySelector(".time-work");
let displayBreak	  = timeBreakSelector.querySelector(".time");
let displayWork		  = timeWorkSelector.querySelector(".time");
let session			  = document.querySelector("#listener");
let audioPlayer		  = document.querySelector("audio")
let sessionDisplay    = session.querySelector("p");
let timeBreak,timeWork;
let hour,min,sec,hourBreak,minBreak,secBreak;

initializePomomdoro();

timeBreakSelector.addEventListener("click",(e) => {
	if(e.target.className === "btn btn-outline-info time-changer-sub"){
		if(timeBreak > 0){
			timeBreak -=60;
			displayBreakTime();	
		}		
	}

	if(e.target.className === "btn btn-outline-info time-changer-add"){
		timeBreak += 60;
		displayBreakTime();	
	}
})

timeWorkSelector.addEventListener("click",(e) => {
	if(e.target.className === "btn btn-outline-info time-changer-sub"){
		if(timeWork > 0){
			timeWork -= 60;
			displayWorkTime();
		}
	}

	if(e.target.className === "btn btn-outline-info time-changer-add"){
		timeWork += 60;
		displayWorkTime();
	}	
})

session.addEventListener("click",(e) => {
	if(e.target.className === "start btn btn-lg btn-success"){
		for(let i = timeWork; i > 0 ; i--){
			setTimeout(() => {
				timeWork--;
				displayWorkTime();
				if(timeWork == 0){
					audioPlayer.play();
				}	
			},1000*i)
		}
	}

	if(e.target.className === "reset btn btn-lg btn-danger"){
		initializePomomdoro();
		window.location.reload();
	}
})

function initializePomomdoro(){
	timeBreak = 300;
	timeWork  = 1500;
	
	hour = timeWork/3600;
	min  = timeWork/60;
	sec  = timeWork%60;

	hourBreak = timeBreak/3600;
	minBreak  = timeBreak/60; 
	secBreak  = timeBreak%60;
	
	if(minBreak < 10) minBreak = "0" + minBreak;
	if(secBreak < 10) secBreak = "0" + secBreak;
	if(min < 10) min = "0" + min;
	if(sec < 10) sec = "0" + sec;
	
	sessionDisplay.textContent = parseInt(hour) + " : " + parseInt(min) + " : " + sec;
	displayWork.textContent    = parseInt(hour) + " : " + parseInt(min) + " : " + sec;
	displayBreak.textContent   = parseInt(hourBreak) + " : " + parseInt(minBreak)+ " : " + secBreak;

}

function displayBreakTime(){
	hourBreak = timeBreak/3600;
	minBreak = parseInt(hourBreak) > 0 ? (timeBreak/60) - (parseInt(hourBreak) * 60) : timeBreak/60;
	minBreak = parseInt(minBreak);
	minBreak  = timeBreak/60; 
	secBreak  = timeBreak%60;
	if(minBreak < 10) minBreak = "0" + minBreak;
	if(secBreak < 10) secBreak = "0" + secBreak;
	displayBreak.textContent = parseInt(hourBreak) + " : " + parseInt(minBreak) + " : " + secBreak;
}

function displayWorkTime(){
	hour = timeWork/3600;
	min = parseInt(hour) > 0 ? (timeWork/60) - (parseInt(hour) * 60) : timeWork/60;
	min = parseInt(min);
	sec  = timeWork%60;
	if(min < 10) min = "0" + min;
	if(sec < 10) sec = "0" + sec;
	sessionDisplay.textContent = parseInt(hour) + " : " + min + " : " + sec;
	displayWork.textContent    = parseInt(hour) + " : " + min + " : " + sec;
}