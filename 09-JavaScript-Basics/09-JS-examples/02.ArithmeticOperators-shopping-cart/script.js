var shoppingCartSum = 0;

function addProduct (price) {
	//shoppingCartSum += price;
	shoppingCartSum = shoppingCartSum + price;
	alert("The sum of the products you selected is " + shoppingCartSum);
} 