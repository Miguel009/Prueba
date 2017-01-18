(function(){

	var formulario = document.formulario_registro,
	    elementos = formulario.elements;
	
//funciones
var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "text"|| elementos[i].type=="email"||elementos[i].type=="password"){
		    if (elementos[i].value==0) {
		    	console.log('agrege algo compa :V'+ elementos[i].Name)
		    	elementos[i].className= elementos[i]. className +' error';
		    	return false;
		    }else{
		    	elementos[i].className= elementos[i].className.replace("error", "");
		    }

	}

		
	}
	if (elementos.contra.value !== elementos.contra2.value) {
		elementos.contra.value="";
		elementos.contra2.value="";
		elementos.contra.className=elementos.contra.className + " error";
		elementos.contra2.className=elementos.contra2.className + " error";
		return false;
	}else{
		elementos.contra.className=elementos.contra.className.replace("error", "");
		elementos.contra2.className=elementos.contra2.className.replace("error", "");
		return true;
	}
	

};

var validarradios = function(){
	var opcion = document.getElementsByName('sexo'),
	resultados = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "radio" && elementos[i].name == "sexo"){
			for (var o = 0; o < opcion.length; o++) {
				if (opcion[o].checked) {
					resultados=true;
					break;
				}
			}

			if (resultados == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                return false;

			} else{
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}

};

var validarcheckbox = function(){
		var opciones = document.getElementsByName('terminos'),
	        resultados = false;

	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "checkbox"){
			for (var o = 0; o < opciones.length; o++) {
				if (opciones[o].checked) {
					resultados=true;
					break;
				}
			}

			if (resultados == false) {
				elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
                return false;

			} else{
				elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
				return true;
			}
		}
	}

};


var enviar = function(e){
	if(!validarInputs()){		
		console.log('falto 1');
		e.preventDefault();
	} else if (!validarradios()){
		console.log('falto 2');
		e.preventDefault();
	}else if (!validarcheckbox()){
		console.log('falto 3');
		e.preventDefault();
	}else{
console.log('GG FUNCIONO :D');
	}
};
//blur y focus
var focusinput = function(){
	this.parentElement.children[1].className="label active";
	this.parentElement.children[0].className= this.parentElement.children[0].className.replace("error", "");
};
var blurinput = function(){
	if (this.value <= 0) {
		this.parentElement.children[1].className="label";
		this.parentElement.children[0].className= this.parentElement.children[0].className + " error";
	}

};

//eventos
formulario.addEventListener("submit", enviar)

for(var i = 0; i < elementos.length; i++) {
	if(elementos[i].type == "text"|| elementos[i].type=="email"||elementos[i].type=="password"){
		elementos[i].addEventListener("focus", focusinput);
		elementos[i].addEventListener("blur", blurinput);
	}
};


}())