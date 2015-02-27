
// to make it a jQuery plugin
$.fn.editInputs = function() {
	var editInput = {};
	console.log(this);
	var $span = $(this);
	var type = $span.data('thing') ;
	console.log(type);
	// var change = $('.edit');

	//Used for the element we click on
	var element = '';
	$span.each(function() {
		setHandler($(this));

	});

	function setHandler(singleElement) {
		var type = singleElement.data('thing') || 'click';
		var update = singleElement.on(type ,function(e){
			e.preventDefault();
			//Save the element we clicked on
			element = $(this);
			element.height( element.height() );
			element.css('display','block')
			//Getting the clicked elements left and top offset
			//So we can position our form right where it was
			//So it looks like we are editing inline with the text
			var elementLeft = element.offset().left;
			var elementTop = element.offset().top;
			// var addId = $('form').attr('id', 'newId');
			console.log(type);
			console.log("am I working");
			//Clear the text in the current element
			var text = $(this).text(' ');
			// // make the form on the page
			var addForm = 
				'<form class="editable-form">' +
					'<input type="text" class="text" placeholder="edit me" >' +
					'<input type="submit" class="submit" >' +
	
				'</form>';
	
			//If there is a form on the page
			if($('.editable-form').length > 0) {
				//Just show it
				$('.editable-form').show()
			}
			else {
				//Else add the form to the body and fade it in
				$(addForm).hide().appendTo('body').fadeIn(400);
			}
			console.log(element.offset())
			$('.editable-form').css({
				top : elementTop,
				left : elementLeft,
				position : 'absolute'
			})
			// }
			// actually add the form to the page
			// append another input field
			$('.text').on('click',function(e){
				e.preventDefault();
				// console.log(test);
			});
		});
	}
	//Added submit click event here
	//So that it does not add too many events when we click .edit
	//Made the event on the body. and used the event delegation to listen for the click
	//on the .submit
	$('body').on('click','.submit',function(e) {
		e.preventDefault();
		//Get the value of the form
		var value = $('.text').val();
		console.log("do I work too");
		console.log(value);
		console.log(element);
		//Add the vale back to the element we are editing
		element.html(value);
		//Clear the form
		$('.text').eq(0).val("");
		//Hide the
		$('.editable-form').hide();
	
	
		// its only ever doing the first value 
	});


}






// var addInput = $(this).append('<input type="text">').append('<input type="submit">');
		// $('input').addClass('submit');
