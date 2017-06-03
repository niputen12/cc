$(document).ready(function(){
	$('#btn').click(function(){
		localStorage.setItem("Email",$("#email").val());
	});
});
$(document).ready(function(){
	$('.Caption1').text(localStorage.Email);
});
