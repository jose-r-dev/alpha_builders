// -----------------------VARIABLES-----------------------
const $conjuntoSlides = document.querySelectorAll(".slides");
const $botonesIzquierdas = document.querySelectorAll(".slides .icon-cheveron-left");
const $botonesDerechas = document.querySelectorAll(".slides .icon-cheveron-right");



const IZQ = -1;
const DER = 1;

let contadores = []




// -------------------------FUNCIONES------------------------------------

function setWidthUl (objetoUl)
{
	let listaImagenesLi = objetoUl.querySelectorAll("li");
	let porcentajeUl = listaImagenesLi.length *100;
	let porcentajeLI = 100 / listaImagenesLi.length
	objetoUl.style.width = (porcentajeUl + "%");


	listaImagenesLi.forEach(li => 
	{
		li.style.width	= (porcentajeLI + "%");
	});
}

function clicIzquierda(indice)
{
	console.log("click izquierda en slide: " + indice);
	let cantidadItems = $conjuntoSlides[indice].querySelectorAll("li").length;
	let $listaImagenesUl = $conjuntoSlides[indice].querySelector("ul");
	let desplazamiento;
	let contador = contadores[indice];

	contador = contador <= 0 ? 0 : contador - 1;
	desplazamiento = 100 / cantidadItems * contador;
	$listaImagenesUl.style.transform = (`translateX(-${desplazamiento}%)`);
	console.log("desplazamiento: " + desplazamiento);
	contadores[indice] = contador;

}
function clicDerecha(indice)
{
	console.log("click derecha en slide: " + indice);
	let cantidadItems = $conjuntoSlides[indice].querySelectorAll("li").length;
	let $listaImagenesUl = $conjuntoSlides[indice].querySelector("ul");
	let desplazamiento;
	let contador = contadores[indice];
	
	contador = contador >= cantidadItems - 1 ? contador : contador + 1;
	desplazamiento = 100 / cantidadItems * contador;
	$listaImagenesUl.style.transform = (`translateX(-${desplazamiento}%)`);
	console.log("desplazamiento: " + desplazamiento);
	contadores[indice] = contador;
}

function creadorClicks(elemento, indexArray, direccion)
{
	if (direccion == IZQ)	elemento.addEventListener("click", ()=> clicIzquierda(indexArray) )
	else elemento.addEventListener("click", ()=> clicDerecha(indexArray) )
}


function AsignarEventosClick (arregloBotones, direccion)
{
	let contador = 0;
	arregloBotones.forEach(boton => 
	{
		creadorClicks(boton, contador, direccion);
		contador++;
		
	});
}

function crearContadores(arreglo)
{
	for (let i = 0; i < arreglo.length; i++) 
	{
		contadores.push(0);
	}
	console.log(contadores)
}


// -----------------------------EJECUCION----------------------------------
AsignarEventosClick($botonesIzquierdas, IZQ);
AsignarEventosClick($botonesDerechas, DER);


setWidthUl($conjuntoSlides[0].querySelector("ul"));
setWidthUl($conjuntoSlides[1].querySelector("ul"));
setWidthUl($conjuntoSlides[2].querySelector("ul"));



crearContadores($conjuntoSlides);


/*-----------------BOTON MENU ------------------------------*/

const $menuNavegacion = document.querySelector("nav");
const $botonMenu = document.getElementById("botonMenu");
const $body = document.body

$botonMenu.addEventListener("click", ()=> 
{
	$menuNavegacion.classList.toggle("activo");
	$body.classList.toggle("sinScroll");
	
});
$menuNavegacion.addEventListener("click", ()=>
{
	$menuNavegacion.classList.remove("activo");
	$body.classList.remove("sinScroll");

});

// -----------------------------SCROLL-----------------------------

const $secciones = document.querySelectorAll("section");
const $elementosNav = $menuNavegacion.querySelectorAll("ul li");
console.log($secciones)
// 0 portada
// 1 ubicacion
// 2 precios
// 3 renders
// 4 servicios
// 5 planos
// 6 formulario



function scrollSecciones (elemento)
{
	let posicionWindowY = window.scrollY;
	let coordenadas = elemento.getBoundingClientRect();
	let posicionElementoY = posicionWindowY + coordenadas.y;
	let intervalo;
	let tiempoInteraccion = 500/60;
	let movimientoY = calcularTiempo (posicionElementoY);
	

	
	if (posicionWindowY <= posicionElementoY) 
	{
		intervalo = setInterval ( ()=>
		{
			window.scrollTo(0,posicionWindowY);
			posicionWindowY += movimientoY;
			if (window.scrollY >= posicionElementoY-30 || window.scrollY >= $body.clientHeight - window.outerHeight  ) clearInterval(intervalo);
		},tiempoInteraccion)
	} 
	else 
	{
		intervalo = setInterval ( ()=>
		{
			window.scrollTo(0,posicionWindowY);
			posicionWindowY -= movimientoY;
			if (window.scrollY <= posicionElementoY || window.scrollY <= 1) clearInterval(intervalo);
		},tiempoInteraccion)
		
	}

	

}

function calcularTiempo(elementoY)
{
	// calcula tiempo para scroll
	let diferenciaY = Math.abs (window.scrollY - elementoY);
	let movimientoY = diferenciaY/30;
	return movimientoY;
}

function crearClicksNavergacion(elementos) 
{
	let i = 0;
	elementos.forEach(elemento => 
	{
		asignarClicksNavegacion(elemento,i);
		i++;
	});
}

function asignarClicksNavegacion (elementoHTML, indice) 
{
	elementoHTML.addEventListener("click",() => scrollSecciones($secciones[indice+1])  )	;
}

crearClicksNavergacion($elementosNav);
