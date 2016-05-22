var userSelect=true;
//var itemClicked;
$(function(){
	$('td').on('click', function(event){
		spaceOpen(event.target.id,event.target.innerText);
		winnerCheck();
	});

	$('#newGame').on('click', function(event){
		startNewGame();
	});
});

//place value
function placeValue(itemClicked){
	if (userSelect == true ) {
			$('#'+itemClicked).text('X');
			userSelect=false; 
		}
		else{
			$('#'+itemClicked).text('O');
			userSelect=true;
		}
};

//function to check if space has been filled
function spaceOpen(selection,value){
	if ((value=='X') || (value== 'O')) {
		alert("This space has been filled");
	}
	else{
		placeValue(selection);
	}
}

//function to check if player has won
function winnerCheck(){
	if ((document.getElementById('s1').innerHTML=="X") && (document.getElementById('s2').innerHTML=="X") && (document.getElementById('s3').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s4').innerHTML=="X") && (document.getElementById('s5').innerHTML=="X") && (document.getElementById('s6').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s4').innerHTML=="X") && (document.getElementById('s5').innerHTML=="X") && (document.getElementById('s6').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s7').innerHTML=="X") && (document.getElementById('s8').innerHTML=="X") && (document.getElementById('s9').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s1').innerHTML=="X") && (document.getElementById('s4').innerHTML=="X") && (document.getElementById('s7').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s2').innerHTML=="X") && (document.getElementById('s5').innerHTML=="X") && (document.getElementById('s8').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s3').innerHTML=="X") && (document.getElementById('s6').innerHTML=="X") && (document.getElementById('s9').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s3').innerHTML=="X") && (document.getElementById('s5').innerHTML=="X") && (document.getElementById('s7').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s1').innerHTML=="X") && (document.getElementById('s5').innerHTML=="X") && (document.getElementById('s9').innerHTML=="X")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s1').innerHTML=="O") && (document.getElementById('s2').innerHTML=="O") && (document.getElementById('s3').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s4').innerHTML=="O") && (document.getElementById('s5').innerHTML=="O") && (document.getElementById('s6').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s4').innerHTML=="O") && (document.getElementById('s5').innerHTML=="O") && (document.getElementById('s6').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s7').innerHTML=="O") && (document.getElementById('s8').innerHTML=="O") && (document.getElementById('s9').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s1').innerHTML=="O") && (document.getElementById('s4').innerHTML=="O") && (document.getElementById('s7').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s2').innerHTML=="O") && (document.getElementById('s5').innerHTML=="O") && (document.getElementById('s8').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s3').innerHTML=="O") && (document.getElementById('s6').innerHTML=="O") && (document.getElementById('s9').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s3').innerHTML=="O") && (document.getElementById('s5').innerHTML=="O") && (document.getElementById('s7').innerHTML=="O")) {
		alert("We have a winner");
	}
	else if ((document.getElementById('s1').innerHTML=="O") && (document.getElementById('s5').innerHTML=="O") && (document.getElementById('s9').innerHTML=="O")) {
		alert("We have a winner");
	}
 }
//function to start new game
function startNewGame(){
	$("td").each(function() {
    $(this).text('');
  });
}
