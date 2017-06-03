
function updateh1family() {
        var selector = document.getElementById('selecth1FontFamily');
        var family = selector.options[selector.selectedIndex].value;
        var pos = document.getElementById('pick')
        pos.style.fontFamily = family;        
}
	  
$(document).ready(function(){
 $('.fadePost').hide()
 $('.backPost').hide() 
 $('.postFade').hide() 
 $('#selecth1FontFamily').hide()
 $('.lab').hide()
 $('.labb').hide()
 $('.postButton').hide()
 $('.cancelButton').hide()
    $(".post").click(function(){    
        $(".fadePost").fadeIn("slow"); 
		$(".backPost").fadeIn("slow");	
		$(".postFade").fadeIn("slow"); 
		$("#selecth1FontFamily").fadeIn("slow");	
		$(".lab").fadeIn("slow");
		$(".labb").fadeIn("slow");
		$(".postButton").fadeIn("slow");
		$(".cancelButton").fadeIn("slow");
    });
});

$(document).ready(function(){ 
    $(".cancelButton").click(function(){    
    $('.fadePost').hide()
	$('.backPost').hide() 
	$('.postFade').hide() 
	$('#selecth1FontFamily').hide()
	$('.lab').hide()
	$('.labb').hide()
	$('.postButton').hide()
	$('.cancelButton').hide()
    });
});

$(document).ready(function(){ 
    $(".postButton").click(function(){    
    $('.fadePost').hide()
	$('.backPost').hide() 
	$('.postFade').hide() 
	$('#selecth1FontFamily').hide()
	$('.lab').hide()
	$('.labb').hide()
	$('.postButton').hide()
	$('.cancelButton').hide()
    });
});


$(function() {
  var showLinks = $('a[data-shows]'),
      hideLinks = $('a[data-hides]');

  showLinks.on('click', function (event) {
    var target = $(this).addClass('active').data('shows');
    $(target).fadeIn().find(':input').prop('required', true);
    hideLinks.removeClass('active');
    return false;
  });

  hideLinks.on('click', function (event) {
    var target = $(this).addClass('active').data('hides');
    $(target).fadeOut().find(':input').prop('required', false);
    showLinks.removeClass('active');
    return false;
  });
});

$(function() {
  var links = $('a[data-shows], a[data-hides]');

  links.on('click', function (event) {
    var link = $(this).addClass('active'),
        type = link.data('shows') ? 'shows' : 'hides',
        target = link.data(type),
        fadeFunc = type === 'shows' ? 'fadeIn' : "fadeOut";
    $(target)[fadeFunc]().find(':input').prop('required', type === 'shows');
    links.not(this).removeClass('active');
    return false;
  });
});

$(document).ready(function(){
 $('.someElement').hide()
 $('.themeOk').hide()
 
    $(".accSet").click(function(){    
        $(".someElement").fadeIn("slow"); 
		$(".backPost").fadeIn("slow");
		 $('.accSettings').hide()
		$(".themeOk").fadeIn("slow");
    });
});
$(document).ready(function(){
 $('.showTheme15').hide()
 $('.showTheme14').hide()
 $('.showTheme11').hide()
 $('.showTheme10').hide()
 $('.showTheme9').hide()
 $('.showTheme8').hide()
 $('.showTheme7').hide()	
 $('.showTheme6').hide()
 $('.showTheme5').hide()
 $('.showTheme4').hide()
 $('.showTheme3').hide()
 $('.showTheme2').hide()
 $('.showTheme').hide()
    $("#chooseTheme1").click(function(){ 
$('.background').hide("fast")	
$('.showTheme4').hide("fast")
$('.showTheme3').hide("fast")			
$('.showTheme2').hide("fast")
$('.showTheme5').hide("fast")
$('.showTheme6').hide("fast")	
$('.showTheme7').hide("fast")	
$('.showTheme8').hide("fast")	
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme').show("fast")	

    });
	
	 $("#chooseTheme2").click(function(){ 
$('.background').hide("fast")
$('.showTheme').hide("fast")
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")
$('.showTheme6').hide("fast")	
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")	
$('.showTheme9').hide("fast")	
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme2').show("fast")	

    });
	
	$("#chooseTheme3").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme4').hide("fast")
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme3').show("fast")	

    });
	
	$("#chooseTheme4").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme4').show("fast")	

    });
	
	$("#chooseTheme5").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme5').show("fast")	

    });
	
	$("#chooseTheme6").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme6').show("fast")

    });
	
	$("#chooseTheme7").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme7').show("fast")

    });
	
	$("#chooseTheme8").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme8').show("fast")

    });
	
	$("#chooseTheme9").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme9').show("fast")

    });
	
	$("#chooseTheme10").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme10').show("fast")
});
	$("#chooseTheme11").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme11').show("fast")
});

	$("#chooseTheme14").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme15').hide("fast")
$('.showTheme14').show("fast")
});

	$("#chooseTheme15").click(function(){ 
$('.background').hide("fast")	
$('.showTheme').hide("fast")
$('.showTheme2').hide("fast")	
$('.showTheme3').hide("fast")
$('.showTheme4').hide("fast")	
$('.showTheme5').hide("fast")	
$('.showTheme6').hide("fast")
$('.showTheme7').hide("fast")
$('.showTheme8').hide("fast")
$('.showTheme9').hide("fast")
$('.showTheme10').hide("fast")
$('.showTheme11').hide("fast")
$('.showTheme14').hide("fast")
$('.showTheme15').show("fast")
});
});

$(document).ready(function(){
 
 $(".themeOk").click(function(){ 
  $('.backPost').hide()
 $('.someElement').hide()
    });
});


$(document).ready(function(){
 $('.accSettings').hide()
 $('.topAcc').hide()  
    $(".changeAcc").click(function(){    
        $(".accSettings").fadeIn("slow");
		$(".topAcc").fadeIn("slow");
		$(".backPost").fadeIn("slow");
		$('.someElement').hide()
    });
});

$(document).ready(function(){
  
    $(".setCan").click(function(){    
        $('.accSettings').hide()
		$('.topAcc').hide() 
		$('.backPost').hide() 
    });
});

$(document).ready(function(){
  
    $(".setOk").click(function(){    
        $('.accSettings').hide()
		$('.topAcc').hide() 
		$('.backPost').hide() 
    });
});

$(document).ready(function(){
 $('.fileC').hide()
    $(".uploadbut").click(function(){ 
        $(".fileC").fadeIn("fast");     
        $('.backPost').fadeIn("slow")
        $('.accSettings').hide()
        $('.someElement').hide()
        
    });
});

$(document).ready(function(){
    $(".close").click(function(){ 
        $(".fileC").hide()  
        $('.backPost').hide()
        
    });
});




$(".confirmPassButton").click(function(){
	if($('.signPass').val()==$('.confirmPass').val())
	{

	    $.post('http://localhost:8000/api/save',
	    {
	                fullName: $('.fName').val(),
	                mobileNumber: $('.mNum').val(),
	                userName: $('.signName').val(),
	                passWord: $('.signPass').val(),
	    },
	    function(response){
	        alert('SUCCESS!');
	        location.href="index.html";
	    }),$.error(function(){

        });
	}
	else
	{
		alert('PASSWORD DOESNT MATCH');
	}
});

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


$(".logButton").click(function(){
	
    $.post('http://localhost:8000/api/login',
    {
        userName: $('.userName').val(),
        passWord: $('.passWord').val(),
    }).done(function(response)
    {
        if(response[0]==1){
        resVal=response[1];
        localStorage.setItem("username",resVal)
        location.href = "MainPage.html";
  
        }
        else 
        {
            alert('Username or Password is incorrect');
        }
    }),$.get('http://localhost:8000/api/wall',{

    }).done(function (response){
        console.log(response);

    });
});



$(document).ready(function(){
    $("#postButton").click(function(){
       

        $.post('http://localhost:8000/api/post',
        {

            userName: localStorage.username,
            post: $('#postFade').val(),
        }).done(function(response)
        {
             // alert(response);
               location.href = "MainPage.html";
        });
    });
});



function post(){
  
   $.post('http://localhost:8000/api/main',{

            userName: localStorage.username,
         
        }).done(function(response){
            var data = JSON.parse(response);
        
            $.each(data, function(index, item){
                $('.post-content').append(item);
                $.each(item, function(key, value){
                    $('.post-content').append('<li class="tested">'+value+'</li>');                                                        
                });
                 $('.post-content').append('<br/></br>');
            });
         

        }),$.post('http://localhost:8000/api/info',{
            userName: localStorage.username,

        }).done(function (response){
            var data = JSON.parse(response);

              $.each(data, function(index, item){
                $.each(item, function(key, value){
                    $('.name').append(value);                                                        
                });
            });

        }),$.post('http://localhost:8000/api/getProfile',{
            userName: localStorage.username,

        }).done(function (response){
            var a = JSON.parse(response);
             var image = a.image;
             var src = "../Api_Laravel/storage/app/public/image/"+image;
             $("#testImg").attr("src",src);
           
        }),$.post('http://localhost:8000/api/showFriend',{
            userName:localStorage.username,

        }).done(function(response){
              var data = JSON.parse(response);
               $.each(data, function(index, item){
                $.each(item, function(key, value){
                    $('.div').append('<li class="lists"><a href="#" onclick="tezz(this);" class="aidol" value="'+value+'">'+value+'</a></li>');                                                        
                });
                $('.tli').append('<br/></br>');
            });
        });



}






$(document).ready(function(){
$('.dropsea').click(function(){

$.post('http://localhost:8000/api/search',{

    userName:$('#search').val(),

}).done(function(response){
    if(response=='1')
    {
    var res = $('#search').val();
    localStorage.setItem('search',res);
    location.href="Search_Ka-Blog.html";
    }
    else{
        alert(response);
    }

});

});

});
$(document).ready(function(){
    $('#search').keypress(function (e) {
 var key = e.which;
 if(key == 13)  // the enter key code
  {
   $.post('http://localhost:8000/api/search',{

    userName:$('#search').val(),

}).done(function(response){
    if(response=='1')
    {
    var res = $('#search').val();
    localStorage.setItem('search',res);
    location.href="Search_Ka-Blog.html";
    }
    else{
        alert(response);
    }

});
  }
});  

});

function getPost(){

      $.post('http://localhost:8000/api/asearch',{

            userName: localStorage.search,
         
        }).done(function(response){
            var data = JSON.parse(response);
        
            $.each(data, function(index, item){
                $('.posts').append(item);
                $.each(item, function(key, value){
                    $('.posts').append(value);                                                        
                });
                 $('.posts').append('<br/></br>');

            }),$.post('http://localhost:8000/api/info',{
            userName: localStorage.search,

        }).done(function (response){
            var data = JSON.parse(response);

              $.each(data, function(index, item){
                $.each(item, function(key, value){
                    $('.name').append(value);                                                        
                });
            });

        }),$.post('http://localhost:8000/api/getProfile',{
            userName: localStorage.search,

        }).done(function (response){
            var a = JSON.parse(response);
             var image = a.image;
             var src = "../Api_Laravel/storage/app/public/image/"+image;
             $("#testImg").attr("src",src);
           
        });




});

    }



$(document).ready(function(){

  

});

$(document).ready(function(){

  $('#aa').click(function(){

    $.post('http://localhost:8000/api/gImg',{
         userName: localStorage.username,
    }).done(function(res){
       
    });



  });

});

$(document).ready(function(){
    $('#uploadbut').click(function(){
        $('.test').val(localStorage.username);
    });
 });

$(document).ready(function(){
   $(".atest").text("ASDASDASD");
   $(".atest").val("Josh");
 });
function testing(){
    var x = $(".atest").val();
    console.log(x);
}
 
 $(document).ready(function(){
  $('.add').click(function(){
    $.post('http://localhost:8000/api/addFriend',{
        userName:localStorage.username,
        friendUser:localStorage.search,
    }).done(function(response){
        alert(response);
    });

  });
 });  



    function tezz(anchor) {
        var value = anchor.getAttribute('value');
       $.post('http://localhost:8000/api/search',{

    userName:value

    }).done(function(response){
        if(response=='1')
        {
        var res = value;
        localStorage.setItem('search',res);
        location.href="Search_Ka-Blog.html";
        }
        else{
            alert(response);
        }

    });
    }

 $(document).ready(function(){
  $('#setOk').click(function(){

    $.post('http://localhost:8000/api/login',
    {
        userName: localStorage.username,
        passWord: $('.currentPass').val(),
    }).done(function(response)
    {
        if(response[0]==1){
            var a  = $('.passWordSet').val();
            var b =$('.conPassWordSet').val();
            if(a==b)
            {
                 $.post('http://localhost:8000/api/update',{
                
                userName:localStorage.username,
                passWord:$('.passWordSet').val(),
                    }).done(function(res){
                 alert(res);
                 location.href="Mainpage.html";
                    });
             }
             else{
                alert('Password Does not match');
             }
  
        }
        else 
        {
            alert('Current Password is incorrect');
        }
    })

    

 });  
});
