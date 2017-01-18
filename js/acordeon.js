$(document).ready(function(){
	//ejecutar selector
	//ponemos que vamos a buscar los elementos li que tengan un lu dentro

	$('.men li:has(ul)').click(function
		(e){
			//que no aparesca nada arriba del link
			e.preventDefault();
			//preguntamos si alguien tiene la variable es decir si lo li la tienen
			if ($(this).hasClass('activado')) {
				//removemos la clase
				$(this).removeClass('activado');
				//llamamos a las variables hijas de ul para arriba y que no se muestre el submenu
				$(this).children('ul').slideUp();

			}else{
				//hacemos esto para que solo funcione con un desplegable a la vez
				//hacemos que si el menu esta activado se quite
				$('.men li ul').slideUp();
				$('.men li').removeClass('activado');
				//mostrar submenu solo al menu que fue clikquedao
				$(this).addClass('activado');
				//llamamos a las varibale hijas para que se bajen en un menu
				$(this).children('ul').slideDown();
			}
			//para abrir los enlaces de los submenus
			
		$('.men li ul li a').click(function(){
			//buscamos el elementi que fue clickeado
			//buscamos el atributo que es el href
			
			window.open(this).attr("href");
		});
		});
});