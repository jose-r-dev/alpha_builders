
const $botonMenu = document.getElementById("botonMenu");
const $menuNavegacion = document.getElementById("menuNav");
const $botonAtras = document.getElementById("botonAtras");

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

$botonAtras.addEventListener("click", ()=>
{
	history.back();
});