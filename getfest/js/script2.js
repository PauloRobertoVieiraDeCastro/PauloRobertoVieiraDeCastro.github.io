if(window.SimpleSlide){
	new SimpleSlide({
		slide:"quote",
		time:5000
	});

	new SimpleSlide({
		slide:"portfolio",
		nav:true,
		time:5000
	});	
}

if(window.SimpleAnime){
	new SimpleAnime();
}

/*$('.carousel').carousel({
	interval:500;
});*/

/*const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}*/

if(window.SimpleForm) {
	new SimpleForm({
	  form: ".formphp", // seletor do formulário
	  button: "#enviar", // seletor do botão
	  erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email saevcompany@gmail.com.</p></div>", // mensagem de erro
	  sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
	});
}
/**/
