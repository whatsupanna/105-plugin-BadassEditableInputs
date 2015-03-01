
// to make it a jQuery plugin
$.fn.editInputs = function(options) {
	// var setting = $.extend({
	// 	style: 'light'
	// },options);

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
		// var style =singleElement.data('style') || 'light';
		var update = singleElement.one(type ,function(e){

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

			console.log(type);
			console.log("am I working");
			//Clear the text in the current element
			var text = $(this).text('');
			// // make the form on the page
			var addForm = 
				'<form class="editable-form">' +
					'<input type="text" class="text" placeholder="edit me" >' +
					'<input type="submit" class="submit" >' +
	
				'</form>';
	
			//If there is a form on the page
			if($('.editable-form').length > 0) {
				//Just show it
				//Remove possible classes
				$('.editable-form').removeClass().addClass('editable-form');
				// $('.editable-form').addClass(style).show();
			}
			else {
				//Else add the form to the body and fade it in
				// $(addForm).addClass(style).hide().appendTo('body').fadeIn(800);
				$(addForm).hide().appendTo('body').fadeIn(800);
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
		//Add the value back to the element we are editing
		element.html(value);
		//Clear the form
		$('.text').eq(0).val("");
		//Hide the
		$('.editable-form').hide();
		
		setHandler($('.edit'));
	
		// its only ever doing the first value 
	});
	//get the height and width of the page  
	// var window_width = $(window).width();  
	// var window_height = $(window).height();  
	  
	//vertical and horizontal centering of modal window(s)  
	/*we will use each function so if we have more then 1 
	modal window we center them all*/  
	// $('.modal_window').each(function(){  
	  
	//     //get the height and width of the modal  
	//     var modal_height = $(this).outerHeight();  
	//     var modal_width = $(this).outerWidth();  
	  
	//     //calculate top and left offset needed for centering  
	//     var top = (window_height-modal_height)/2;  
	//     var left = (window_width-modal_width)/2;  
	  
	//     //apply new top and left css values  
	//     $(this).css({'top' : top , 'left' : left});  
	  
	// });
	// $('.activate_modal').click(function(){  
	// //get the id of the modal window stored in the name of the activating element  
	//   var modal_id = $(this).attr('name');  
	  
	// //use the function to show it  
	//           show_modal(modal_id);  
	  
	//     });  
	  
	// $('.close_modal').click(function(){  
	  
	// //use the function to close it  
	// close_modal();  
	  
	//     });  
	  
	// });
	// function close_modal(){  
	  
	//     //hide the mask  
	//     $('#mask').fadeOut(500);  
	  
	//     //hide modal window(s)  
	//     $('.modal_window').fadeOut(500);  
	  
	// }  
	// function show_modal(modal_id){  
	  
	//     //set display to block and opacity to 0 so we can use fadeTo  
	//     $('#mask').css({ 'display' : 'block', opacity : 0});  
	  
	//     //fade in the mask to opacity 0.8  
	//     $('#mask').fadeTo(500,0.8);  
	  
	//      //show the modal window  
	//     $('#'+modal_id).fadeIn(500);  
	  
	// }  

}






// var addInput = $(this).append('<input type="text">').append('<input type="submit">');
		// $('input').addClass('submit');
