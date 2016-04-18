var $overlay = $('<div id="overlay"></div>')

$('body').append($overlay);

$('#menu').click(function(event) {
	event.preventDefault();
	$(this).hide(200);
	$(this).removeClass('menu_logo').addClass('big_x').show(200);
	$overlay.show('slow');
});