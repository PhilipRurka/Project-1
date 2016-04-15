$('#menu').click(function (){
	$('#menu').hide('slow');
//small delay
	
//make it fade to black
	$('#menu_click').addClass('BG');
//button's and text appears
	$('#menu').removeClass('menu_logo').addClass('big_x').show('slow');
});