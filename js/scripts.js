var $overlay = $('<div id="overlay"><ul><li><a href="lab.html">Lab</a></li><li><a href="home_gallery.html">Home Gallery</a></li><li><a href="eco.html">Eco</a></li><li><a href="contact.html">Contact</a></li></ul></div>')

$('body').append($overlay);


$('#menu').click(function(event) {
	event.preventDefault();
	$(this).hide(200);
	$(this).removeClass('menu_logo').addClass('big_x').show(200);
	$overlay.show('slow');
});