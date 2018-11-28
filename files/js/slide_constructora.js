let divsH1 = document.querySelectorAll("h1 div");
let $botonVerMasConstructora;
let $botonPlay = document.getElementById("botonPlay");
let $botonSiguiente = document.getElementById("botonSiguiente");
let $videoDom = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo video");
let propiedadesVideos = [
	{src:"files/assets/video_empresarial.m4v",fondo:"files/assets/fondo_video.jpg"},
	{src:"files/assets/video_edificios.mp4",fondo:"files/assets/fondo_video_edificios.jpg"}];
let indiceVideos = 1;
let $contenedorConstructora = document.querySelector(".seccionConstructora .contenedor");
let indiceTemplates = 1;

// elementos especificos para animacion
let $contenedorGeneralVideo = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo")
let $contenedorGeneralTexto = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralTexto")

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
							<video type="video/mp4" style="background-image : url('files/assets/fondo_video.jpg'); background-size: contain ">
								Navegador no compatible con VideoHTML5
							</video>
							<div class="botonPlay" id="botonPlay">
								<figure>
									<img src="files/assets/boton_play.png" alt="">
								</figure>
							</div>
							<div class="botonPlay" id="botonSiguiente">
								<figure>
									<img src="files/assets/boton_siguiente.png" alt="">
								</figure>
							</div>
						</div>
						<a href="" class="boton" id="botonVerMasConstructora">Ver más</a>
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
									<img src="files/assets/firma.png" alt="firma">
								</figure>

							</div>

						</div>
					</div>`
	templates[1] = `<div class="contenedorGeneralVideo">
						<div>
							<figure>
								<img src="files/assets/fondo_mision_vision.jpg" alt="fondo">
							</figure>
						</div>
						<a href="" class="boton" id="botonVerMasConstructora"><span>Ver más</span></a>
					</div>
					<div class="contenedorGeneralTexto">
						<div>
							<div>
								<h3>Misión</h3>
								<p>
									Dar a nuestros inversionistas soluciones inmobiliarias de primer nivel, enfocadas en la inteligencia constructiva y financiera.
								</p>
								<h3>Visión</h3>
								<p>
									Ser la empresa líder en construcción e inversiones inmobiliarias inteligentes en Ecuador para el año 2020.
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
										<img src="files/assets/fondo_trayectoria.jpg" alt="">			
									</figure>
									<div class="fila zoomy">
										<figure>
											<img src="files/assets/trayectoria.png" alt="">
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
	$botonVerMasConstructora.onclick = ()=>
	{
		
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

		return false;
	};
}

function recargarElementosDom()
{
	$botonVerMasConstructora = document.getElementById("botonVerMasConstructora");
	generarEventoClickVer();
	try 
	{
		$botonPlay = document.getElementById("botonPlay");
		$botonSiguiente = document.getElementById("botonSiguiente");
		$videoDom = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo video");	
		asignarEventoPlay();
		asignarEventoSiguiente();
	} 
	catch (error) 
	{
		console.log("elemento inexistente" + error)	
	}

	try 
	{
		$contenedorGeneralVideo = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralVideo");
		$contenedorGeneralTexto = document.querySelector(".seccionConstructora .contenedor .contenedorGeneralTexto");
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
			$botonPlay.querySelector("img").src = "files/assets/boton_pause.png";
		} 
		else 
		{
			$videoDom.pause();
			$botonPlay.querySelector("img").src = "files/assets/boton_play.png";
		}
	});

}

function asignarEventoSiguiente()
{
	$botonSiguiente.addEventListener("click", ()=>
	{
		$videoDom.setAttribute("src" , propiedadesVideos[indiceVideos].src);
		$videoDom.style = `background-image : url('${propiedadesVideos[indiceVideos].fondo}'); background-size: contain`
		indiceVideos = indiceVideos >= 1 ? 0 : 1;

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

	let $fuenteVideo = $contenedorGeneralVideo.querySelector("video");
	if ($fuenteVideo.getAttribute("src") == null || $fuenteVideo.getAttribute("src") == "" ) 
	{
		$fuenteVideo.setAttribute("src" , "files/assets/video_empresarial.m4v");
		
	} 

}



recargarElementosDom();


window.onload = ()=>
{

	
	setTimeout( ()=>
	{
		$menuNavegacion.style = "transform:none"
		divsH1[0].style = "transform: translateX(-200%)";
		divsH1[1].style = "transform: translateX(120%)";
		let spans = [];
		spans[0] = divsH1[0].getElementsByTagName("span")[0];
		spans[1] = divsH1[1].getElementsByTagName("span")[0];
		let direccion = 1;
		setInterval( ()=>
		{
			
			if (direccion == 1) 
			{ 
				divsH1[0].style = `transform: translateX(0) ; `;
				divsH1[1].style = `transform: translateX(0) ; `;
			}
			else 
			{ 
				divsH1[0].style = `transform: translateX(-200%) ; `;
				divsH1[1].style = `transform: translateX(120%) ; `;
			}
			
			

			direccion = direccion*(-1);

			
			

		}, 5000)


		

	}, 200);




}

document.onscroll = function ()
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

	primeraAnimacionProyectos();
	

}






	
	
