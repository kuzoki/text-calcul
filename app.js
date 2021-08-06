




//console.log(text.length);

(function($){
"use strict";
$(".s-result" ).hide(); 	
	

	$( ".calculate-words" ).on( "click", function() {
	  	let texta = $('.textarea').val();
		let block = [];
		let characnb = [];
		
		 console.log(block)
		
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
		   	$(".search" ).show(); 
		  }
		
		$(".text p" ).html( texta );
		
	});

	

	$( ".search" ).on( "click", function() {

		var textarea = $( ".text p" ).text();
		let inputVal = $(".input-search").val();

		//console.log(inputVal);
		if (inputVal != "") {
			function checkWord(e) {
			  return e == inputVal;
			};
		  	const n = textarea.split(' ');
		  	let narr = n.filter(checkWord);

		  	$(".repeated").text(narr.length);
		  	$(".word-va").text(inputVal);
		  	$(".s-result" ).show(); 

		}else{
			alert("EMPTY INPUT");
		}
		
	});
	

})(jQuery);