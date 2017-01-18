$(document).on("ready", inicio);

function inicio(){
	$(".formu").on("click", abrirFull);	
	$(".formu2").on("click", abrirFull2);
	$(".formu3").on("click", abrirFull3);
	$(".formu4").on("click", abrirFull4);
	$(".formu5").on("click", abrirFull5);
	$(".formu6").on("click", abrirFull6);
	$(".formu7").on("click", abrirFull7);
	$(".formu8").on("click", abrirFull8);
	$(".formu9").on("click", abrirFull9);
	$(".formu10").on("click", abrirFull10);
	$(".formu11").on("click", abrirFull11);
	$(".formu12").on("click", abrirFull12);
	$(".formu13").on("click", abrirFull13);
	$(".formu14").on("click", abrirFull14);	
	$(".formu15").on("click", abrirFull15);	
	$(".formu16").on("click", abrirFull16);	
	$(".formu17").on("click", abrirFull17);	
	$(".formu18").on("click", abrirFull18);	
	$(".formu19").on("click", abrirFull19);	
	$(".formu20").on("click", abrirFull20);	
	$(".formu21").on("click", abrirFull21);
	$(".formu22").on("click", abrirFull22);	
	$(".formu23").on("click", abrirFull23);	
	$(".formu").on("click", subir);
	$(".formu2").on("click", subir);
	$(".formu3").on("click", subir);
	$(".formu4").on("click", subir);
	$(".formu5").on("click", subir);
	$(".formu6").on("click", subir);
	$(".formu7").on("click", subir);
	$(".formu8").on("click", subir);
	$(".formu9").on("click", subir);
	$(".formu10").on("click", subir);
	$(".formu11").on("click", subir);
	$(".formu12").on("click", subir);
	$(".formu13").on("click", subir);
	$(".formu14").on("click", subir);
	$(".formu15").on("click", subir);
	$(".formu16").on("click", subir);
	$(".formu17").on("click", subir);
	$(".formu18").on("click", subir);
	$(".formu19").on("click", subir);
	$(".formu20").on("click", subir);
	$(".formu21").on("click", subir);
	$(".formu22").on("click", subir);
	$(".formu23").on("click", subir);
	$("#sucribir").on("click", cerrarFull);
}

function abrirFull(){

	var direecion = "CapitulosF/Cap1.png"
	$("#sucribir").attr('src', direecion );

}
function subir(){
	var $contenedor2=$('.header');
	$('html, body').animate({scrollTop: $contenedor2.height()}, 1000);


}
function abrirFull2(){

	var direecion = "CapitulosF/Cap2.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull3(){

	var direecion = "CapitulosF/Cap3.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull4(){

	var direecion = "CapitulosF/Cap4.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull5(){

	var direecion = "CapitulosF/Cap5.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull6(){

	var direecion = "CapitulosF/Cap6.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull7(){

	var direecion = "CapitulosF/Cap7.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull8(){

	var direecion = "CapitulosF/Cap8.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull9(){

	var direecion = "CapitulosF/Cap9.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull10(){

	var direecion = "CapitulosF/Cap10.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull11(){

	var direecion = "CapitulosF/Cap11.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull12(){

	var direecion = "CapitulosF/Cap12.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull13(){

	var direecion = "CapitulosF/Cap13.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull14(){

	var direecion = "CapitulosF/Cap14.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull15(){

	var direecion = "CapitulosF/Cap15.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull16(){

	var direecion = "CapitulosF/Cap16.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull17(){

	var direecion = "CapitulosF/Cap17.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull18(){

	var direecion = "CapitulosF/Cap18.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull19(){

	var direecion = "CapitulosF/Cap19.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull20(){

	var direecion = "CapitulosF/Cap20.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull21(){

	var direecion = "CapitulosF/Cap21.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull22(){

	var direecion = "CapitulosF/Cap22.png"
	$("#sucribir").attr('src', direecion );

}
function abrirFull23(){

	var direecion = "CapitulosF/Cap23.png"
	$("#sucribir").attr('src', direecion );

}
function cerrarFull(){

	var direecion = "imagenes/flash1.png"
	$("#sucribir").attr('src', direecion );
}

