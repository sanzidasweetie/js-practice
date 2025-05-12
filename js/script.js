//JavaScript

//ex.8
var number1 =5;
var number2 =4;
var result = number1 + number2;

function aOp(){
	document.getElementById('re').innerHTML=result;
}

//ex.7
function varOutput(){
	var varoutput = "welcome";
	document.getElementById('ot').innerHTML=varoutput;
}

//ex.6
function cName(){
	document.getElementsByClassName('h4')[3].innerHTML="hello world";
}

//ex.5
function hrNumber(){
	var data = document.getElementsByTagName('hr');
	alert(data.length);
}

//ex.4
function showText(){
	document.getElementById('sohi').style.display="block";
}
function hideText(){
	document.getElementById('sohi').style.display="none";
}


//ex.3
function changeColor(){
	document.getElementById('cc').style.backgroundColor="red";
}

//ex.2
function bulbOn(){
	document.getElementById('img').src = "images/on.gif";
}
function bulbOff(){
	document.getElementById('img').src = "images/off.gif";
}


//ex.1
function showDate(){

	document.getElementById('sd').innerHTML = date();
}
function showText(){
	document.getElementById('st').innerHTML = "Hello World";
}

function changeText(){
	document.getElementById('ct').innerHTML = "Hello World";
}