const msg = "Químico/Analista de dados/Desenvolvedor";
let titulo = document.querySelector(".vero");

var speed = 100;
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
