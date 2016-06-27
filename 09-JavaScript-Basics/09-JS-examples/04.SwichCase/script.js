function getSpecialOffer () {
	// get the value of the select
	var color = document.getElementById('color').value;

	switch(color) {
		case "black": setDressImage("blackDress"); break;
		case "red": setDressImage("redDress"); break;
		case "green": setDressImage("greenDress"); break;
		case "blue": setDressImage("blueDress"); break;
		case "yellow": setDressImage("yellowDress"); break;
		default: alert('Please select color');
	}
} 

function setDressImage(imageName){
	document.getElementById('special-offer').style.backgroundImage = 'url("img/' + imageName + '.jpg")';
}

//Exercise: make a switch case with week days