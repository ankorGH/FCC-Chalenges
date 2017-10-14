let board  		    = document.querySelector(".board");
let spaces 		    = document.querySelectorAll(".board div");
let displayWon      = document.querySelector(".playerInfo");
spaces				= Array.from(spaces);
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

board.addEventListener("click",eventPlay,false);

function eventPlay(e){
	for(let i = 0; i < spaces.length; i++){
		if(e.target.className === i.toString()){
			if(!spaces[i].textContent.trim()){
			 playerPlay(spaces,i,humanPlayer)
			 if(!checkTie(spaces)){
			 	playerPlay(spaces,bestSpot(),machinePlayer)
			 } 
			}
		}		
	}	
}


function playerPlay(board,position,player){
	board[position].textContent = player;
	let playerWon =  checkPlayerWon(board,player);
	if(playerWon){
		gameOver(spaces,player);
	}
}

function checkTie(board){
	return emptySquares().length === 0
}

function bestSpot(){
	emptySquares()[0].className
	// console.log()
}

function emptySquares(){
	let emptySpaces =  spaces.filter((elem) => {
		return elem.textContent.trim() === ""
	})
	return emptySpaces;
}

function checkPlayerWon(board,player){
	let playerWon = null;
	let playerSpots = board.reduce((acc,elem,index) => {
		if(elem.textContent == player){
			return acc.concat(index)
		}else{
			return acc;
		}
	},[])
	for(let [index,arr] of winCombinations.entries()){ 
		if(arr.every((val) => playerSpots.includes(val))){
			playerWon = {"index":index,"player":player}
			break;
		}
	}
	return playerWon;
}

function gameOver(board,player){
	displayWon.style.display = "block";
	displayWon.textContent = player + " Won";
}