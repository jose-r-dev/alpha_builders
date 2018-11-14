let divsH1 = document.querySelectorAll("h1 div");
let $botonVerMasConstructora;
let $botonPlay = document.getElementById("botonPlay");
let $videoDom = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo video");
let $contenedorConstructora = document.querySelector(".seccionConstructora .contenedor");
let indiceTemplates = 1;

// elementos especificos para animacion
let $contenedorGeneralVideo = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo")
let $contenedorGeneralTexto = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralTexto ")

//parametros zoomy
let options = {
	zoomFactor: 1.8,
	class: 'zoomy',
	direction: 'horizontal',
	cursor: true
};

function generarTemplate(indice)
{
	const templates = [];
	templates[0] = `<div class="contenedorGeneralVideo">
						<div>
							<video src="assets/video_empresarial.m4v" >Tu navegador no es compatible con VIDEO HTML5</video>
							<div class="botonPlay" id="botonPlay">►</div>
						</div>
						<a href="" class="boton" id="botonVerMasConstructora"><span>Ver más</span></a>
					</div>
					<div class="contenedorGeneralTexto">
						<div>
							<div>
								<h3>Abre la puerta de las grandes inversiones.</h3>
								<p>
										Poseemos los equipos, el talento humano capacitado
										y el conocimiento necesario para el desarrollo de
										proyectos de calidad de acuerdo a los estándares
										y exigencias de los nuevos tiempos
								</p>
								<figure>
									<img src="assets/firma.png" alt="firma">
								</figure>

							</div>

						</div>
					</div>`
	templates[1] = `<div class="contenedorGeneralVideo">
						<div>
							<figure>
								<img src="assets/fondo_mision_vision.jpg" alt="fondo">
							</figure>
						</div>
						<a href="" class="boton" id="botonVerMasConstructora"><span>Ver más</span></a>
					</div>
					<div class="contenedorGeneralTexto">
						<div>
							<div>
								<h3>Misión</h3>
								<p>
									Dar a nuestros inversionistas soluciones inmobiliarias de primer nivel , enfocadas en la inteligencia constructiva y financiera.
								</p>
								<h3>Visión</h3>
								<p>
									Ser la empresa líder en construcción e inversiones inmobiliarias inteligente en Ecuador para el año 2020.
								</p>
							</div>

						</div>
					</div>`
	templates[2] = `<div>
						<div class="contenedorGeneralTexto trayectoria">
							<div>
								<div class="filaTexto">
									<div>
										<h3>Trayectoria</h3>
										<p>
											Construimos tu legado.
										</p>

									</div>
									<figure>
										<img src="assets/fondo_trayectoria.jpg" alt="">			
									</figure>
									<div class="fila zoomy">
										<figure>
											<img src="assets/trayectoria.png" alt="">
										</figure>
									</div>
									<a href="" class="boton" id="botonVerMasConstructora"><span>Ver más</span></a>
								</div>
							</div>
						</div>
					</div>`

	return templates[indice];
	
}

function generarEventoClickVer()
{
	$botonVerMasConstructora.addEventListener("click", ()=>
	{
		event.preventDefault();
		$contenedorConstructora.classList.add("invisible");
		
		setTimeout(()=>
		{
			$contenedorConstructora.innerHTML = generarTemplate(indiceTemplates);
			$contenedorConstructora.classList.remove("invisible");
			recargarElementosDom();

			setTimeout( ()=>
			{
				try 
				{
					$contenedorGeneralTexto.classList.add("movimiento0");
					$contenedorGeneralVideo.classList.add("movimiento0");
				}
				catch (error)
				{
					console.log(error)
				}
			},200);
			
			indiceTemplates = indiceTemplates >= 2 ? 0 : indiceTemplates+1;

			
		}, 500);
	});
}

function recargarElementosDom()
{
	$botonVerMasConstructora = document.getElementById("botonVerMasConstructora");
	generarEventoClickVer();
	try 
	{
		$botonPlay = document.getElementById("botonPlay");
		$videoDom = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo video");	
		asignarEventoPlay();
	} 
	catch (error) 
	{
		console.log("elemento inexistente" + error)	
	}

	try 
	{
		$contenedorGeneralVideo = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo");
		$contenedorGeneralTexto = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralTexto ");
	} 
	catch (error) 
	{
		console.log("elemento inexistente" + error);
	}
	initZoomy(options);
}

function asignarEventoPlay ()
{
	$botonPlay.addEventListener("click", ()=>
	{
		if ($videoDom.paused == true) 
		{
			$videoDom.play();
			$botonPlay.innerHTML = "☐";
		} 
		else 
		{
			$videoDom.pause();
			$botonPlay.innerHTML = "►";
		}
	});

}


function AnimacionConstructoraPrimerScroll ()
{
	$contenedorGeneralVideo.classList.add("movimiento0");
	setTimeout( ()=>
	{
		$contenedorGeneralTexto.classList.add("movimiento0");
		console.log("animacion scroll constructora")

	}, 600)
}



recargarElementosDom();


window.onload = ()=>
{
	setTimeout( ()=>
	{
		divsH1[0].style = "transform: translateX(-200%)";
		divsH1[1].style = "transform: translateX(120%)";
		

	}, 200)

}

window.addEventListener("scroll", ()=>
{
	if (window.scrollY >= detectarPosicionElemento($contenedorConstructora) - 900 && window.scrollY <= detectarPosicionElemento($botonVerMasConstructora) + 500)
	{
		setTimeout(()=>
		{
			try
			{
				AnimacionConstructoraPrimerScroll();
				
			}
			catch(error)
			{

			}
		},300);
		
	} 

})



	
	
