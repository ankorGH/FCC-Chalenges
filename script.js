let cells 		    = document.querySelectorAll(".board div");
let displayWon      = document.querySelector(".playerInfo");
let humanPlayer     = "O";
let machinePlayer   = "X"; 
let winCombinations = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]
]
cells = Array.from(cells);

cells.forEach((value) => {
	value.addEventListener("click",playerPlay,false);
})

function playerPlay(e){
	if(e.target.textContent === ""){
		playerToplay(e.target,humanPlayer);
		playerToplay(cells[emptyCells()[0]],machinePlayer)
	}
}
function playerToplay(cell,player){
	cell.textContent = player;
	let game = gameWon(player);
	if(game){
		removelistener();
	}
	if(checkTie()){
		console.log("game tied")
	}
}
function removelistener(){
	cells.forEach((value) => {
		value.removeEventListener("click",playerPlay,false);
	})	
}

function gameWon(player){
	let cellsPlayed = cells.reduce((acc,val) => {
		if(val.textContent === player){
			return acc.concat(+val.className);
		}
		return acc;
	},[])
	for([index,array] of winCombinations.entries()){
		if(array.every((val) => cellsPlayed.includes(val))){
			displayPlayerWon(player);
			return {index:index};
			break;
		}
	}
}

function emptyCells(){
	let cellsEmpty = cells.reduce((acc,val) => {
		if(val.textContent === ""){
			return acc.concat(+val.className);
		}
		return acc;
	},[])
	return cellsEmpty;
}

function cellsPlayed(){
	let cellsPlayed = cells.reduce((acc,val) => {
		if(val.textContent !== ""){
			return acc.concat(+val.className);
		}
		return acc;
	},[])
	return cellsPlayed;
}

function checkTie(){
	return cellsPlayed().length === 0 
}

function displayPlayerWon(player){
	displayWon.style.display = "block";
	displayWon.innerHTML = player + " Won";
}