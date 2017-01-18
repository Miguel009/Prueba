$(document).ready(function(){
	var altura =$('.conte').offset().top;
	
	$(window).on('scroll', function(){
		if($(window).scrollTop() > altura){

			$('.conte').addClass('conte1');

		}else{

			$('.conte').removeClass('conte1');

		}



	});
});