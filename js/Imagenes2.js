$(document).on("ready", inici);

function inici(){
	$(".formus").on("click", abrirsFull);
	$(".formus2").on("click", abrirsFull2);
	$(".formus3").on("click", abrirsFull3);
	$(".formus4").on("click", abrirsFull4);
	$(".formus5").on("click", abrirsFull5);
	$(".formus6").on("click", abrirsFull6);
	$(".formus7").on("click", abrirsFull7);
	$(".formus8").on("click", abrirsFull8);
	$(".formus9").on("click", abrirsFull9);
	$(".formus10").on("click", abrirsFull10);
	$(".formus11").on("click", abrirsFull11);
	$(".formus12").on("click", abrirsFull12);
	$(".formus13").on("click", abrirsFull13);
	$(".formus14").on("click", abrirsFull14);
	$(".formus15").on("click", abrirsFull15);
	$(".formus").on("click", subir2);
	$(".formus2").on("click", subir2);	
	$(".formus3").on("click", subir2);	
	$(".formus4").on("click", subir2);	
	$(".formus5").on("click", subir2);	
	$(".formus6").on("click", subir2);	
	$(".formus7").on("click", subir2);	
	$(".formus8").on("click", subir2);	
	$(".formus9").on("click", subir2);	
	$(".formus10").on("click", subir2);	
	$(".formus11").on("click", subir2);	
	$(".formus12").on("click", subir2);	
	$(".formus13").on("click", subir2);		
	$(".formus14").on("click", subir2);		
	$(".formus15").on("click", subir2);	
	$("#sucribir").on("click", cerrarsFull);
}
function subir2(){
	var $contenedor2=$('.header');
	$('html, body').animate({scrollTop: $contenedor2.height()}, 1000);


}


function abrirsFull(){

	var direecion = "CapitulosF/Cap1_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull2(){

	var direecion = "CapitulosF/Cap2_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull3(){

	var direecion = "CapitulosF/Cap3_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull4(){

	var direecion = "CapitulosF/Cap4_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull5(){

	var direecion = "CapitulosF/Cap5_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull6(){

	var direecion = "CapitulosF/Cap6_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull7(){

	var direecion = "CapitulosF/Cap7_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull8(){

	var direecion = "CapitulosF/Cap8_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull9(){

	var direecion = "CapitulosF/Cap9_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull10(){

	var direecion = "CapitulosF/Cap10_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull11(){

	var direecion = "CapitulosF/Cap11_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull12(){

	var direecion = "CapitulosF/Cap12_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull13(){

	var direecion = "CapitulosF/Cap13_2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirsFull14(){

	
	var direecion = "CapitulosF/Cap14_2.png"
	$("#sucribir").attr('src', direecion );

}

function abrirsFull15(){

	
	var direecion = "CapitulosF/Cap15_2.png"
	$("#sucribir").attr('src', direecion );

}

function cerrarsFull(){

	var direecion = "imagenes/flash1.png"
	$("#sucribir").attr('src', direecion );
}
