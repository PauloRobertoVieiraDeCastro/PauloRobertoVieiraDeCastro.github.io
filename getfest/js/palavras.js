const msg = "Aqui nós transformamos seus sonhos em doces realidades.";
let titulo = document.querySelector(".palavra");

var speed = 150;
var cont = 0;
function typeWriter(){
	if(cont<msg.length){
		titulo.textContent += msg.charAt(cont);
		cont ++;
		setTimeout(typeWriter, speed);
	}else{
		titulo.textContent = " ";
		cont = 0
		typeWriter()
	}
}

typeWriter();

