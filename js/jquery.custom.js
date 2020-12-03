//======================================================
//
//	Custom jQuery scripts for Typefolio
//	
//	Only simple scripts go here
//
//======================================================

// debulked onresize handler
// https://github.com/louisremi/jquery-smartresize
function on_resize(c,t){onresize=function(){clearTimeout(t);t=setTimeout(c,100)};return c};


$(document).ready(function(){	
	
// The below section is a test
	filterSelection("all")
	function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		w3RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
	}
	}

	// Show filtered elements
	function w3AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
		element.className += " " + arr2[i];
		}
	}
	}

	// Hide elements that are not selected
	function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
	}

	// Add active class to the current control button (highlight it)
	var btnContainer = document.getElementById("myBtnContainer");
	var btns = btnContainer.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
	}
// The above section is a test

	// Simple hover functions
	$('.hoverMe').fadeTo(0, 0.5);
	$('.hoverMe').hover(function () {
		$(this).stop().fadeTo(200, 1);
	}, function () {
		$(this).stop().fadeTo(200, 0.5);
	});
	
	// Table odd & even functions
	$('table').each(function() {
		$(this).children('tbody').find('tr:odd').addClass('odd'); 
		$(this).children('tbody').find('tr:even').addClass('even'); 
		
		$(this).find('tr').each(function() {
			$(this).children('td').last().addClass('last');
		});
	});

	// Table odd & even functions
	$('ul').each(function() {
		$(this).children('li:last-child').addClass('.last-child');
	});
	
	// Stackgrid show item information on hover
	$('.stackgrid.images-only .item').hover(function () {
		$(this).find('.box-desc').stop().fadeIn();
	}, function () {
		$(this).find('.box-desc').stop().fadeOut();
	});
	

	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('.sticky').typeSticky();

	// initialize typeMenu
	// this plugin was specifically written for Typefolio
	$('#nav').typeMenu();


});


