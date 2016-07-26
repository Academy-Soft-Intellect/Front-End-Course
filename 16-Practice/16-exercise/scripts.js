$.ajax({
	method: "GET",
	url: "data/feutures.json",
	dataType: "json"
}).done(function(data){
	console.log(data);
	data.forEach(function(feature){
		generateBox(feature);
	})
}).fail(function(){
	alert("Error")
});

function generateBox(feature){
	var holder = $('.features .container');	
	var html = $('<div class="feature"><div class="icon ' + feature.icon +'"></div><h2>' + feature.name + '</h2><p>' + feature.description + '</p></div>');
	$(holder).append(html);
}