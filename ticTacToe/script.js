let board  = document.querySelector(".board")
let spaces = document.querySelectorAll(".board div")

board.addEventListener("click",function(e){
	if(e.target.className === "space-one"){
		if(!spaces[0].textContent.trim()){
			spaces[0].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}

	if(e.target.className === "space-two"){
		if(!spaces[1].textContent.trim()){
			spaces[1].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-three"){
		if(!spaces[2].textContent.trim()){
			spaces[2].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-four"){
		if(!spaces[3].textContent.trim()){
			spaces[3].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-five"){
		if(!spaces[4].textContent.trim()){
			spaces[4].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-six"){
		if(!spaces[5].textContent.trim()){
			spaces[5].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-seven"){
		if(!spaces[6].textContent.trim()){
			spaces[6].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-eight"){
		if(!spaces[6].textContent.trim()){
			spaces[6].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
	if(e.target.className === "space-nine"){
		if(!spaces[7].textContent.trim()){
			spaces[7].textContent = 0;
			let num = generate();
			spaces[num].textContent = 1;	
		}
	}
})

function generate(){
	let num = Math.floor(Math.random() * 9);
	// while(spaces[num].textContent.trim()){
	// 	console.log(Boolean(spaces[num].textContent.trim()))
	// 	num = Math.floor(Math.random() * 9);
	// }
	return num;
}