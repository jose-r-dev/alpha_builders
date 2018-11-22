
const $botonMenu = document.getElementById("botonMenu");
const $menuNavegacion = document.getElementById("menuNav");

$botonMenu.addEventListener("click", ()=> {
	$menuNavegacion.classList.toggle ("visible");
	document.body.classList.toggle("sinScroll");
	setTimeout(()=>{window.scrollTo(0,0)},100);
	
	
} );

$menuNavegacion.addEventListener("click", ()=> 
{
	$menuNavegacion.classList.remove("visible")
	document.body.classList.remove("sinScroll");
});

