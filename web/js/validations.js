function validateForm()
{
	if($.trim($('.fName').val()).length==0 )
	{
		alert('no fname value');
	return false;
	}
	if($.trim($('.mNum').val()).length==0 )
	{
		alert('no number value');
	return false;
	}
	if($.trim($('.signName').val()).length==0 )
	{
		alert('no username value');
	return false;
	}
	if($.trim($('.signPass').val())!=$.trim($('.confirmPass').val()))
	{
		alert('Password Does not match');
		return false;

	}

}
