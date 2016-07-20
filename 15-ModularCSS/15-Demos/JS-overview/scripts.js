var age = 15;

function setAge(newAge){
	age = newAge;
}

function getAge(){
	return age;
}

/*if(age > 18){
	console.log("Adult");
} else if(age === 18){
	console.log("--")
} else{
	console.log("You are too yung");
}*/
document.getElementById('days-select').style.color = "red";


function showDayMsg(){
	var selectValue = document.getElementById('days-select').value;
	var message;

	switch(selectValue){
		case 'Monday': message = 'It\'s Monday'; break;
		case 'Tuesday': message = 'It\'s Tuesday'; break;
		case 'Wednesday': message = 'It\'s Wednesday'; break;
		case 'Thursday': message = 'It\'s Thursday'; break;
		case 'Friday': message = 'It\'s Friday'; break;
		default: message = 'It\'s weekend!'
	}

	var msgHolder = document.getElementById('msg-holder');
	msgHolder.innerHTML = message;
	/*var textNode = document.createTextNode(message);
	msgHolder.appendChild(textNode);*/
}

document.getElementById('show-day-msg').addEventListener('click', showDayMsg);


var count = 21;

while(count <= 20){
	console.log(count);
	count ++;
}

do{
	console.log(count);
	count ++;
} while(count <= 20);

var people = ['Pesho', 'Ivan', 'Desi'];
var peopleLen = people.length;
var msgHolder = document.getElementById('msg-holder');


/*for(var i=0; i < peopleLen; i++){
	var textNode = document.createTextNode(people[i] + "; ");
	msgHolder.appendChild(textNode);
}*/

people.forEach(function(person){
	var textNode = document.createTextNode(person + " ");
	msgHolder.appendChild(textNode);
});

var person = {
	name: 'Desi',
	age:25,
	getAge: function(){
		return age;
	}
}

console.log(person[name]);
var result = person.getAge();
console.log(result)

for(var prop in person){
	console.log(prop + " " + person[prop]);
}

var days = [];

days.push('Monday');
days.push('Tuesday');
days.unshift('Wednesday');
days.pop();
days.shift();
days[1] = 'Friday';
console.log(days);

var select = $('select');
var changeHandler = function(){
	//$(select).css('color', 'yellow');
	$(select).css({'color': 'yellow', 
					'font-size': '18px'
					});
}
select.on('change', changeHandler);

var nameInput = $('#name');

var focusHandler = function(){
	$(nameInput).css({
		'border-width': '2px',
		'border-color': 'blue'
	});
}

var blurHandler = function(){
	$(nameInput).css({
		'border-width': '1px',
		'border-color': 'gray'
	});
}

$(nameInput).on('focus', focusHandler);
$(nameInput).on('blur', blurHandler);

var box = $('#box');


var saveBtn = $('#save-data');

var getData = function(){
	var value = $(nameInput).val();
	var p = $('<p>' + value +'</p>');
	$(box).html(p);
	$(box).css({'position': 'relative'});
	$(p).css({'position': 'absolute'});
	$(box).animate({
		width: '400px',
		height: '400px',
		'font-size': '30px',
		'border-radius': '8px'
	}, 3000);
	$(p).animate({
		top: '40%',
		left: '40%'
	}, 3000);
}
$(saveBtn).click(getData);




