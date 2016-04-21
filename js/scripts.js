var $overlay = $('<div id="overlay"></div>');
var $ul = $('<ul></ul>');
var $lab = $('<li><a href="pages/lab.html">Lab</a></li>');
var $gallery = $('<li><a href="pages/home_gallery.html">Home Gallery</a></li>');
var $eco = $('<li><a href="pages/eco.html">Eco</a></li>');
var $contact = $('<li><a href="pages/contact.html">Contact</a></li>');
var swich = 0;

$overlay.append($ul);
$ul.append($lab).append($gallery).append($eco).append($contact);
$('body').append($overlay);
$('#overlay').hide();

$('#menu').click(function(event) {
	event.preventDefault();
	if (swich === 0) {
	$(this).hide(200);
	$(this).removeClass('menu_logo').addClass('big_x').show(200);
	$overlay.show('slow');
swich += 1;
} else {
	$(this).hide(200);
	$(this).removeClass('big_x').addClass('menu_logo').show(200);
	$overlay.hide('slow');
	swich = swich - 1;
};
});