$(function(){
	/* CODE JS */


	/* SI vous souhaiter vérifier a chaque caractère rentrer ( a l'edition ) remplace " focustout " par " keyup " */
	$('#mail').focusout(function() {
		var text_mail = $(this).val(),
			emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i),
			valid = emailReg.test(text_mail);

		if(valid) {
			$(this).removeClass('error');
			$('.text_error.mail').hide();
			$(this).addClass('success');
		}else{
			$(this).removeClass('success');
			$('.text_error.mail').show();
			$(this).addClass('error');
		}

	});

	$('#pass').focusout(function() {
		var text_pass = $(this).val(),
			emailReg = new RegExp(/^.{6,20}$/i),
			valid = emailReg.test(text_pass);
		if(valid) {
			$(this).removeClass('error');
			$('.text_error.pass').hide();
			$(this).addClass('success');
		}else{
			$(this).removeClass('success');
			$('.text_error.pass').show();
			$(this).addClass('error');
		}

	});


	// Vérification au clic
	$('#span_session').click(function() {
		if( $('#session').is(':checked') ){ // Si la case est déjà cocher
			$(this).removeClass('valid');
		} else {
			$(this).addClass('valid');
		}
	});
	$('#labelforsession').click(function() {
		if( $('#session').is(':checked') ){ // Si la case est déjà cocher
			$('#span_session').removeClass('valid');
		} else {
			$('#span_session').addClass('valid');
		}
	});

});