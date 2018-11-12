
const $itemsProyectos = document.querySelectorAll("#listaProyectos ul li");
const $contenedorSlides = document.getElementById("contenedorSlides");
let $contenedorProyecto;
let $columnaTextoAnimado;

function generarItem(proyecto)
{
	let url;
	let entregado;
	if (proyecto.landing) 
	{
		url = `landings/${proyecto.nombre}/landing_${proyecto.nombre}.html`;	
	} 
	else 
	{
		url = `subpaginas/proyectos.html`
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
		entregado = "Vendido 100%"	
	} 


	let template = `<div class="itemProyecto" id="contenedorProyecto" style="background-image: url(assets/proyectos/foto_${proyecto.nombre}.png)">
						<div class="columnas">
							<div class="columna" id="columnaTxtAnim">
								<div>
									<p>${entregado}</p>
									<p>${proyecto.entrega} </p>
								</div>
								<div>
									<p>Sector</p>
									<p>${proyecto.sector}</p>
								</div>

							</div>
							<div class="columna">
								<figure>
									<img src="assets/proyectos/logo_${proyecto.nombre}.png" alt="logo">
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
		clickProyecto(elemento, objetoJSON[indice] )
		indice++;
		
	});
}

function clickProyecto (elemento, proyecto)
{
	elemento.addEventListener("click", () =>
		{
			$contenedorSlides.classList.add("invisible");
			
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


				console.log($contenedorProyecto)
			}, 600)
		} )

}

function inclick ()
{
	$contenedorSlides.classList.add("invisible");
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
		console.log($contenedorProyecto)
	}, 600)
}


generarEventosClick($itemsProyectos, jsonProyectos);
