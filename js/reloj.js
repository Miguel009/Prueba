(function () {

	var actualizar = function(){
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diasemana= fecha.getDay(),
			dia=fecha.getDate(),
			mes=fecha.getMonth(),
			year= fecha.getFullYear();

	var phoras = document.getElementById('horas'),
		pAMPM = document.getElementById('ampm'),
		Pminutos= document.getElementById('minutos'),
		psegundos = document.getElementById('segundos'),
		pdiasemana =document.getElementById('diasemana'),
		pdia=document.getElementById('dia'),
		pmes=document.getElementById('mes'),
		pyear=document.getElementById('year');
	var semana= ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
	pdiasemana.textContent = semana[diasemana];	
	pdia.textContent = dia;
	var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
	pmes.textContent=meses[mes];
	pyear.textContent= year;


	if (horas >=12) {
		horas=horas-12;
		ampm='PM';
	}else{
		ampm='AM';
	}

	if(horas==0){
		horas=12;
	}

	phoras.textContent = horas;
	pAMPM.textContent = ampm;
	if (minutos<10) {
		minutos="0" + minutos;
	};
	if (segundos<10) {
		segundos="0" + segundos;
	};
	Pminutos.textContent = minutos;
	psegundos.textContent=segundos;



	};
	actualizar();
	var intervalo = setInterval(actualizar, 1000);
	
}())