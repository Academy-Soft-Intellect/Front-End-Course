var Person = function (name, age) {
	this.name = name;
	this.age = age;
	this.introduce = function(){
		return "Hello! I'm " + this.name;
	}
}

var ivan = new Person("Ivan", 25);
var mitko = new Person("Mitko", 30);
var desi = new Person("Desi", 30);

var people = [];
people.push(ivan);
people.push(mitko);
people.push(desi);

var createBox = function(person){
	var body = document.getElementsByTagName('body')[0];
	var div = document.createElement('div');
	var personInfo = "<h1>" + person.name +"</h1>";
	personInfo += "<p class='age'>Age: " + person.age +"</p>";
	personInfo += "<p>" + person.introduce() +"</p>";

	div.innerHTML = personInfo;
	body.appendChild(div);
}

people.forEach(function(person){
	createBox(person);
});

var a = 3;
var b = 4;



function sum(a, b){
	var result = a + b;
	return result;
}

var sum2 = function(a, b){
	var result = a + b;
	return result;
}
sum2()
sum(a, b);


$('button').click(function(){
	//code
})

$('button').on('mouseEnter', function(){

})

$('button').css({
	'background': 'red',
	'color': 'blue'
})

$('button').css('background', 'red')
