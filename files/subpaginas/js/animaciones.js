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


AsignarEventosClick($botonesIzquierdas, IZQ);
AsignarEventosClick($botonesDerechas, DER);

try {
	setWidthUl($conjuntoSlides[0].querySelector("ul"));
	setWidthUl($conjuntoSlides[1].querySelector("ul"));
		
} catch (error) {
	
}



crearContadores($conjuntoSlides);