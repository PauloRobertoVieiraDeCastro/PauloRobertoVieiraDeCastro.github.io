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

const hamburger = document.querySelector(".hamburger");
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
}
