
const $itemsProyectos = document.querySelectorAll("#listaProyectos ul li");
const $contenedorSlides = document.getElementById("contenedorSlides");
let $contenedorProyecto;

function generarItem(proyecto)
{
	let url;
	if (proyecto.landing) 
	{
		url = `landings/${proyecto.nombre}/landing_${proyecto.nombre}.html`;	
	} 
	else 
	{
		url = `subpaginas/proyectos.html`
	}

	let template = `<div class="itemProyecto" id="contenedorProyecto" style="background-image: url(assets/proyectos/foto_${proyecto.nombre}.png)">
						<div class="columnas">
							<div class="columna">
								<div>
									<p>Entrega</p>
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
	elemento.addEventListener("click", ()=>
		{
			$contenedorSlides.classList.add("invisible");
			setTimeout(()=>
			{
				$contenedorSlides.innerHTML = generarItem(proyecto);
				$contenedorSlides.classList.remove("invisible");
			}, 500)
		} )

}

generarEventosClick($itemsProyectos, jsonProyectos);