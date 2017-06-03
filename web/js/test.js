$(".confirmPassButton").click(function(){

    $.post('http://localhost:8000/api/save',
    {
        		fullName: $('.fName').val(),
				mobileNumber: $('.mNum').val(),
				userName: $('.signName').val(),
				passWord: $('.signPass').val(),
    },
    function(response){
        alert("SUCCESS!");
    });
});


$(".logButton").click(function(){

    $.post('http://localhost:8000/api/login',
    {
        userName: $('.userName').val(),
		passWord: $('.passWord').val(),
    }).done(function(response)
    {
    	if(response==1)
    	{
    		//alert(response);
    	location.href = "MainPage.html";
    	}
    	else 
    	{
    		alert('Username or Password is incorrect');
    	}
    });
});