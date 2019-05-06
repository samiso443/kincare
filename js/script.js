// Kincare Scripts

// Scroll Reveals -- fade in 
window.sr = ScrollReveal();
sr.reveal('.showcase-left', {
  duration: 3000,
  origin:'left',
  distance:'300px'
});

sr.reveal('.showcase-right', {
  duration: 3000,
  origin:'right',
  distance:'300px'
});

(function () {

	// Navbar background after scroll
	$(window).on('scroll', function() {
		if($(window).scrollTop()) {
			$('nav').addClass('nav-bg-color');
		} else {
			$('nav').removeClass('nav-bg-color');
		}
	});
	
	// Faq slide toggle
	$('h5.question').click(function() { 
		$(this).toggleClass( "question-open" );
		$(this).next('.answer').slideToggle(); 
	});	

	// Thumbnail conatiner carousel implementation
	$('.thumbnail-container .card').on('click', function(event) {
		// var src = $(this).attr("src");
		// $('.image-container div').attr("src", src); //incorrect
		
		// $(".image-container div").empty().append( 
		//     $("<div>", {class: this.card}));
		
		// $('.thumbnail-container div').contents().appendTo('.image-container div');
		
		var content = $(this).html();
		$('.image-container div').replaceWith('<div class="card text-white">' + content + '</div>');
		$('.thumbnail-container div').css("border", "none");
		// $('.thumbnail-container img').css("border", "none");
		$(this).css("border", "5px solid yellow");
		var parentElm = $(this).parent();
		if(parentElm.find('a')) {
			var text = parentElm.find('a').text();
			var link = parentElm.find('a').attr('href');
			$('.image-container h3').html("<a href='" + link + "' target='_blank'>" + text + "</a>");
		}
		$('.image-container div a').remove();
	});

}());