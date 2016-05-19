
/***********************************************************
                         	Var
************************************************************/
/*   3     #    */


var $overlay = $('<div id="overlay"></div>');
var $ul = $('<ul></ul>');
var $lab = $('<li><a href="pages/lab.html">Lab</a></li>');
var $gallery = $('<li><a href="pages/gallery.html">Home Gallery</a></li>');
var $eco = $('<li><a href="pages/eco.html">Eco</a></li>');
var $contact = $('<li><a href="pages/contact.html">Contact</a></li>');
var swich = 0;


/***********************************************************
                      Append + CSS + Hide
************************************************************/
/*   3     #    */


$overlay.append($ul);
$ul.append($lab).append($gallery).append($eco).append($contact);
$('body').append($overlay);
$('#overlay').hide();


/***********************************************************
                       Event Function
************************************************************/
/*   3     #    */


$('#menu').click(function(event) {
	event.preventDefault();
	if (swich === 0) {
	$(this).hide();
	$(this).removeClass('menu_logo').addClass('big_x').show();
	$overlay.fadeIn(200);
swich += 1;
} else {
	$(this).hide();
	$(this).removeClass('big_x').addClass('menu_logo').show();
	$overlay.fadeOut(200);
	swich = swich - 1;
};
});


/***********************************************************
                       Call Function
************************************************************/
/*   3     #    */




/***********************************************************
                       	   Test
************************************************************/
/*   3     #    */
	

















