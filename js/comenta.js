(function(){

	var formulario = document.formulario_registro,
	    elementos = formulario.elements;
	
//funciones
var validarInputs = function(){
	for (var i = 0; i < elementos.length; i++) {
		if(elementos[i].type == "text"){
		    if (elementos[i].value==0) {
		    	console.log('agrege algo compa :V'+ elementos[i].Name)
		    	elementos[i].className= elementos[i]. className +' error';
		    	return false;
		    }else{
		    	elementos[i].className= elementos[i].className.replace("error", "");
		    	
		    }
		    
	}

		
	}
	
return true;
};




var enviar = function(e){
	if(!validarInputs()){		
		console.log('falto 1');
		e.preventDefault();
	
	}else{
alert('Mensaje Enviado')
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
	if(elementos[i].type == "text"){
		elementos[i].addEventListener("focus", focusinput);
		elementos[i].addEventListener("blur", blurinput);
	}
};


}())