




//console.log(text.length);

(function($){
"use strict";
	
	

	$( ".calculate-words" ).on( "click", function() {
	  	let texta = $('.textarea').val();
		let block = [];
		let characnb = [];

		const words = texta.split(' ');
		
		   for (var i = 0; i < words.length; i++) {
		   	 if (words[i] !== "") {
		   	 	block.push(words[i]);
		   	 }
		   }

		   console.log(block.length);

		   for (var i = 0; i < texta.length; i++) {
		   	 if (texta[i] !== " ") {
		   	 	characnb.push(texta[i]);
		   	 }
		   }

		   console.log(characnb.length);

		  if (characnb.length == 0) {
		  		alert("Nothing was Added To Text Area")
		  }else {
		  	$(".w-number").text(block.length);
		   	$(".c-number").text(characnb.length);
		  }
	});

})(jQuery);