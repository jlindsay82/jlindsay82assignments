/*
Using if statements, create a rock, paper, scissors game.

https://wrpsa.com/the-official-rules-of-rock-paper-scissors/

You may use any method of user input and any method of visualisation (alerts, document.getElement etc), as you will be marked on the JavaScript logic around your if statements

J Lindsay
15/11/2022
*/
function game(){
	var name=document.getElementById("formName").value;
	var userGuess=document.getElementById("formGuess").value;
	var randomNumber = Math.floor(Math.random() * 3) + 1;
	var computerGuess;
	//console.log(randomNumber);
	if(randomNumber=1){
		computerGuess="ROCK";
	}
	else if(randomNumber=2){
		computerGuess="PAPER";
	}
	else if(randomNumber=3){
		computerGuess="SCISSORS";
	}
	else{
		computerGuess="error";
	}
	//console.log(computerGuess);
	
	if(userGuess.toUpperCase()=="ROCK"){
		if(computerGuess=="ROCK"){
			document.getElementById("rockPaper").innerHTML=name+" - It's a draw! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="PAPER"){
			document.getElementById("rockPaper").innerHTML=name+" - You Lose! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="SCISSORS"){
			document.getElementById("rockPaper").innerHTML=name+" - You Win! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else{
			document.getElementById("rockPaper").innerHTML=name+" - Oops, something went wrong! - You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		hide();
	}
	else if(userGuess.toUpperCase()=="PAPER"){
		if(computerGuess=="ROCK"){
			document.getElementById("rockPaper").innerHTML=name+" - You Win! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="PAPER"){
			document.getElementById("rockPaper").innerHTML=name+" - It's a draw! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="SCISSORS"){
			document.getElementById("rockPaper").innerHTML=name+" - You Lose! You produced "+userGuess.toUpperCase().toUpperCase()+" and the computer produced "+computerGuess;
		}
		else{
			document.getElementById("rockPaper").innerHTML=name+" - Oops, something went wrong! - You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		hide();
	}
	else if(userGuess.toUpperCase()=="SCISSORS"){
		if(computerGuess=="ROCK"){
			document.getElementById("rockPaper").innerHTML=name+" - You Lose! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="PAPER"){
			document.getElementById("rockPaper").innerHTML=name+" - You win! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else if(computerGuess=="SCISSORS"){
			document.getElementById("rockPaper").innerHTML=name+" - It's a draw! You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		else{
			document.getElementById("rockPaper").innerHTML=name+" - Oops, something went wrong! - You produced "+userGuess.toUpperCase()+" and the computer produced "+computerGuess;
		}
		hide();
	}
	else{
		alert("Sorry, that is not a valid input!");
	}
	document.getElementById("playAgain").innerHTML="Press F5 to play again :)";
}//close function game

function hide(){
	document.getElementById("button").style.visibility="hidden";
}
