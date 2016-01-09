$(function(){
	/* CODE JS */


	// Vérification au clic
	$('#span_session').click(function() {
		if( $('#session').is(':checked') ){ // Si la case est déjà cocher
			$(this).removeClass('valid');
		} else {
			$(this).addClass('valid');
		}
	});

});