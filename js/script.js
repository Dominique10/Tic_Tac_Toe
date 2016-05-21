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
// function winnerCheck(){
// 	if ((document.getElementById('s1').innerHTML==document.getElementById('s2').innerHTML) && (document.getElementById('s2').innerHTML==document.getElementById('s3').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s4').innerHTML==document.getElementById('s5').innerHTML) && (document.getElementById('s5').innerHTML==document.getElementById('s6').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s7').innerHTML==document.getElementById('s8').innerHTML) && (document.getElementById('s8').innerHTML==document.getElementById('s8').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s1').innerHTML==document.getElementById('s4').innerHTML) && (document.getElementById('s4').innerHTML==document.getElementById('s7').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s2').innerHTML==document.getElementById('s5').innerHTML) && (document.getElementById('s5').innerHTML==document.getElementById('s8').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s3').innerHTML==document.getElementById('s6').innerHTML) && (document.getElementById('s6').innerHTML==document.getElementById('s9').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 	else if ((document.getElementById('s1').innerHTML==document.getElementById('s5').innerHTML) && (document.getElementById('s5').innerHTML==document.getElementById('s9').innerHTML)) {
// 		alert("We have a winner");
// 	}
// 		else if ((document.getElementById('s3').innerHTML==document.getElementById('s5').innerHTML) && (document.getElementById('s5').innerHTML==document.getElementById('s7').innerHTML)) {
// 		alert("We have a winner");
// 	}
// }
//function to start new game
function startNewGame(){
	//$("#board > tbody").html("");
	$('#board').find('tr').each(function (i, value) {
    console.log(i+' '+value);
    });
}
