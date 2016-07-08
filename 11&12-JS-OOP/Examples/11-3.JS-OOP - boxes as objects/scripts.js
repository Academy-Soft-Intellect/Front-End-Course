var Box = function(width, height, background, color){
	this.width = width;
	this.height = height;
	this.background = background;
	this.color = color;
} 

Box.prototype.generate = function(){
	// create the div
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	//style the div
	div.style.width = this.width + 'px';
	div.style.height = this.height + 'px';
	div.style.backgroundColor = this.background;
	div.style.color = this.color;

	body.appendChild(div);
}

/*var box1 = new Box(250, 350, 'red', 'white');
box1.generate();*/


var addNewBox = function(){
	var widthInputValue = document.getElementById('width').value;
	var heightnputValue = document.getElementById('height').value;
	var bgInputValue = document.getElementById('bg').value;
	var colorInputValue = document.getElementById('color').value;

	var dynamicllyAddedBox = new Box(widthInputValue, heightnputValue, bgInputValue, colorInputValue);
	dynamicllyAddedBox.generate();
}

var buttonAdd = document.getElementById('create-box-btn');
buttonAdd.addEventListener('click', addNewBox);