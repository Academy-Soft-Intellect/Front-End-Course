function getSpecialOffer () {
	// get the value of the select
	var gender = document.getElementById('gender').value;
	console.log(gender)

	if(gender === "Male"){
		document.getElementById('special-offer').style.backgroundImage = 'url("img/suit.jpg")';
	} else{
		document.getElementById('special-offer').style.backgroundImage = 'url("img/dress.jpg")';
	}
} 

// exercise: make a square/circle select and show the selected form

//exercise: make the calculator more complex