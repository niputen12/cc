$('.btn-sign').click(function(){
	if($('.pWd').val() == $('.reppWd').val()){
		$.post('http://localhost:8000/api/register',{

		FirstName:$('.fName').val(),
		LastName:$('.lName').val(),
		Email:$('.email').val(),
		Gender:$('.gender').val(),
		BirthDay:$('.birthDay').val(),
		PassWord:$('.pWd').val(),
		ConfPass:$('.reppWd').val(),
	}).done(function(response){
		alert(response);
		location.href ="Profile.php";
	});	
	} else{
		alert("Password doesnt match.");
	}
	
	
});
