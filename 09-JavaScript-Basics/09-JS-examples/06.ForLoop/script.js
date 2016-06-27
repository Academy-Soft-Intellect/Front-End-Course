function printNumbers () {
	// get start number
	var startNumber = document.getElementById('start-number').value;
	// get to number
	var toNumber = document.getElementById('to-number').value;

	var div = document.createElement('div');
	var holder = document.getElementById('numbers-holder');

	for(var i = startNumber; i < toNumber; i++){
		var node = document.createTextNode(i + " -- ");
		holder.appendChild(node);
	}
}
