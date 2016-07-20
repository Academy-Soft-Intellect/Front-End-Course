var tableBody = $('tbody');

$.ajax({
	method: "GET",
	url: "data/products.json",
	dataType: "json"
}).done(function(data){
	data.forEach(function(product){
		var tr = "<tr><td>" + product.ProductName + "</td>";
		tr += "<td>" + product.Price + "</td>";
		tr += "<td>" + product.Stock + "</td></tr>";
		tableBody.append(tr);
	})

}).fail(function(error){
	alert("Data can not be loaded")
	console.log(error);
})
var addNewProduct = function(){
	$('#new-product-form').css('display', 'block');
}
var save = function(){
	var name = $('#name').val();
	var price = $('#price').val();
	var stock = $('#stock').val();

	var tr = "<tr><td>" + name + "</td>";
		tr += "<td>" + price + "</td>";
		tr += "<td>" + stock + "</td></tr>";
		tableBody.append(tr);
}
$('#add-new').click(addNewProduct);
$('#save').click(save);



