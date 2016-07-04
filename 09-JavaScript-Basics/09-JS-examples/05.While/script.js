function generateBoxes () {
	// get selected boxes number
	var selectedBoxesNumber = document.getElementById('boxes-number').value;

	selectedBoxesNumber = parseInt(selectedBoxesNumber);

	var boxesCount = 0;

	/*while(boxesCount < selectedBoxesNumber){
		generateSingleBox();
		boxesCount ++;
		debugger;
	}*/

	for(var i = 0; i < selectedBoxesNumber; i++){
		generateSingleBox();
		boxesCount ++;
	}

	/*do{
		generateSingleBox();
		boxesCount ++;
	} while(boxesCount < selectedBoxesNumber);*/
}

function generateSingleBox() {
	var div = document.createElement('div');
	var holder = document.getElementById('boxes-holder');
	holder.appendChild(div);
}
