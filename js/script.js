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



}());