//var h1 = document.getElementsByTagName('h1')[0];
/*var h1 = $('header h1')[0];
var h1 = $('#title');*/

$(document).ready(function(){
	var h1 = $('.text')[0];

	//h1.style.display = 'none';
	$(h1).hide();

	var btn = $('#show-title');

	var showTitle = function(){
		$(h1).show();
	}
	var hideTitle = function(){
		$(h1).hide();
	}
	//$(btn).hover(showTitle);
	$(btn).on('mouseenter', showTitle);
	$(btn).on('mouseleave', hideTitle);
	//btn.addEventListener('mouseover', showTitle);
	//btn.addEventListener('mouseout', hideTitle);
	var focusHandler = function(event){
		var target = event.target;
		target.style.borderColor = 'red';
	}
	var input = $('input')[0];
	console.log(input);
	$(input).focus(focusHandler);

	var toggleTitle = function(){
		//var h2 = $('h2');
		//$(h2).toggle();

		$('h2').toggle();
		
	}
	$('#toggle-title').click(toggleTitle);
	var imgDog = $('#img');

	var fadeImg = function() {
		$(imgDog).fadeIn(2000);
	}
	var fadeOutImg = function(){
		$(imgDog).fadeOut(3000);
	}
	var imgAnimate = function(){
		$(imgDog).animate({
			width: '600px',
			top: '250px',
			left: '250px'
		}, 2000)
	}
	$('#fade').click(fadeImg);
	$('#fade-out').click(fadeOutImg);
	$('#animate').click(imgAnimate);
	
	var squire = $('#squire');
	var changeSquire = function(){
		$(squire).animate({
			borderRadius: '100%'
		}, 3000)
	}

	$('#change-squire').click(changeSquire)
	var slideDownSquire = function(){
		$(squire).slideUp(3000)
				.fadeIn(3000)
				.fadeOut(2000)
				.slideDown(1000);
	}
	$('#slide-down-squire').click(slideDownSquire);
	//$(squire).css('background-color', 'blue');
	$(squire).css({
		color: "yellow",
		"background-color": "blue",
		width: "300px"
	})

	//$('div').eq(0).html('<p>some text</p>') ;
	$('div').eq(0).text('some text');

	var getFormData = function(){
		var firstName = $('#first-name').val();
		var lastName = $('#last-name').val();
		var select = $('#select').val();
		console.log(select);

		/*if(firstName.length < 3){
			alert("The name must be at least 3 symbols");
		} else if(lastName.length < 3){
			alert("The last name must be at least 3 symbols");
		} else{
			document.write("Name: " + firstName + " Last Name " + lastName);
		}*/
		
	}
	$('#form-btn').click(getFormData);

	var changeImage = function(){
		var attr = $(imgDog).attr('src', 'img/cat.jpg');
	}
	var changeImageToDog = function(){
		var attr = $(imgDog).attr('src', 'img/dog.jpg');
	}
	$('#change-img').on('mouseenter', changeImage);
	$('#change-img').on('mouseleave', changeImageToDog);

	var setActive = function(ev){
		$('nav a').removeClass('active');

		var link = ev.target;
		$(link).addClass('active');
		$(link).attr('href', 'about.html');

	}
	$('nav').eq(0).click(setActive);
});


