function generateBoxes () {
	// get selected boxes number
	var selectedBoxesNumber = document.getElementById('boxes-number').value;

	selectedBoxesNumber = parseInt(selectedBoxesNumber);
	var boxesCount = 0;
	while(boxesCount < selectedBoxesNumber){
		generateSingleBox();
		boxesCount ++;
	}
}

function generateSingleBox() {
	var div = document.createElement('div');
	var holder = document.getElementById('boxes-holder');
	holder.appendChild(div);
}
