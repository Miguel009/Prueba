$(document).ready(function(){
	var estado = false//signfica que el boton esta cerrado
	//estamos llamadndo a nuestro id del botton y estamos diciendo 
	//que si se le da clik que hara la funcion de .main
	
	var $contenedor=$('.header');
	var $contenedor2=$('.main');
	$('#btn-toggle').on('click',function(){
		$('.main').slideToggle();
		
		
		//condicional

		if(estado == true){
			$(this).text("Curiosidades (abrir)");
			$('html, body').scrollTop;


			estado=false;
		} else {
			$(this).text("Curiosidades (cerrar)");			
			estado=true;
			$('html, body').animate({scrollTop: $contenedor2.width()}, 2500);
		}

	});
});