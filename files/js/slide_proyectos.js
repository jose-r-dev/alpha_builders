
const $itemsProyectos = document.querySelectorAll("#listaProyectos ul li");
const $contenedorSlides = document.getElementById("contenedorSlides");
$contenedorSlides.innerHTML = generarItem(jsonProyectos[localStorage.getItem("proyecto")]);
let $contenedorProyecto;
let $columnaTextoAnimado;

function generarItem(proyecto)
{
	let url;
	let entregado;
	let vendido;
	if (proyecto.landing) 
	{
		url = `files/landings/${proyecto.nombre}/landing_${proyecto.nombre}.html`;	
	} 
	else 
	{
		url = `files/subpaginas/proyectos_${proyecto.nombre}.html`
	}
	if (proyecto.entregado) 
	{
		entregado = "Entregado"	
	} 
	else 
	{
		entregado = "Entrega"
	}
	if (proyecto.vendido) 
	{
		vendido = "Vendido 100%"	
	} 
	else
	{
		vendido="";
	}


	let template = `<div class="itemProyecto" id="contenedorProyecto" style="background-image: url(files/assets/proyectos/foto_${proyecto.nombre}.png)">
						<div class="columnas">
							<div class="columna" id="columnaTxtAnim">
								<div>
									<p>${entregado}</p>
									<p>${proyecto.entrega} </p>
									<p>${vendido}</p>
								</div>
								<div>
									<p>Sector</p>
									<p>${proyecto.sector}</p>
								</div>

							</div>
							<div class="columna">
								<figure>
									<img src="files/assets/proyectos/logo_${proyecto.nombre}.png" alt="logo">
								</figure>
								<a href="${url}" class="boton" id="botonVerProyecto"><span>Ver más</span></a>
							</div>

						</div>
					</div>`;

	return template;
}





function generarEventosClick(elementosHTML, objetoJSON)
{
	let indice = 0;
	elementosHTML.forEach(elemento => {
		clickProyecto(elemento, objetoJSON[indice], indice )
		indice++;
		
	});
}

function clickProyecto (elemento, proyecto, indice)
{
	elemento.onclick = () => clickProyectoEjecutado(proyecto,indice)

}

function clickProyectoEjecutado(proyecto,indice)
{
	$contenedorSlides.classList.add("invisible");
	window.localStorage.setItem("proyecto",indice)
	setTimeout(()=>
	{
		$contenedorSlides.innerHTML = generarItem(proyecto);
		$contenedorSlides.classList.remove("invisible");
		$contenedorProyecto = document.getElementById("contenedorProyecto");
		$columnaTextoAnimado = document.getElementById("columnaTxtAnim");
	}, 500)

	setTimeout(()=>
	{
		$contenedorProyecto.classList.add("movimiento0");
	}, 600)
	setTimeout(()=>
	{
		$columnaTextoAnimado.classList.add("movimiento0");
	}, 800);
}

function animacionScroll ()
{
	
	$contenedorProyecto.classList.add("movimiento0");
	$columnaTextoAnimado.classList.add("movimiento0");
	
}



function primeraAnimacionProyectos()
{
	if ( (window.scrollY >= detectarPosicionElemento($contenedorProyecto) - 900) && (window.scrollY <= detectarPosicionElemento($contenedorProyecto) + 500) )
	{
		setTimeout(()=>
		{
			animacionScroll();
			console.log("animacion proyectos")
		},300)
		
	} 

}


// document.addEventListener("scroll",  ()=> primeraAnimacionProyectos());


$contenedorProyecto = document.getElementById("contenedorProyecto");
$columnaTextoAnimado = document.getElementById("columnaTxtAnim");
generarEventosClick($itemsProyectos, jsonProyectos);
primeraAnimacionProyectos();

