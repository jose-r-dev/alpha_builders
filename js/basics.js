
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

function detectarPosicionElemento(elemento)
{
	let posicionWindowY = window.scrollY;
	let coordenadas = elemento.getBoundingClientRect();
	let posicionElementoY = posicionWindowY + coordenadas.y;
	return posicionElementoY;
}

(function()	{	emailjs.init("user_LULCOs88STP0Ks1unvuCZ");	})(); //funcion auto invocada
var myform = $("form#myform");
myform.submit(function(event)
{
	event.preventDefault();
	// Change to your service ID, or keep using the default service
	var service_id = "gmail";
	var template_id = "formulario_landing";

	myform.find("button").text("Sending...");
	emailjs.sendForm(service_id,template_id,myform[0])
		.then(function()
		{ 
			alert("Formulario enviado!");
			// borrar textos inputs
			var entradas = myform.find("input");
			console.log(entradas);
			for (let i = 0; i < 3; i++) 
			{
				entradas[i].value = "";
				entradas[i].disabled=true;
			}
			//fin bloque
			myform.find("button").text("Send");
		}, 
		function(err) 
		{
			alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
			myform.find("button").text("Send");
		});

		return false;
});