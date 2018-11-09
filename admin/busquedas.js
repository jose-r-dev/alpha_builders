

// --------------------------------ELEMENTOS DEL DOM--------------------------------------


const $fechaInicial = document.getElementById("fechaInicial");
const $fechaFinal = document.getElementById("fechaFinal");
const $nombreCliente = document.getElementById("nombreCliente")
const $parametrosBusqueda = document.getElementById("select_parametro_busqueda");
const $botonBuscar = document.getElementById("botonBuscar");


// ----------------------------------VARIABLES GLOBALES--------------------------------------


const POR_FECHA = 0;
const POR_NOMBRE = 1;


// ------------------------------------FUNCIONES---------------------------------------


function cambioParametrosBusqueda(valor)
{

    if (valor == POR_FECHA) 
    {
        $fechaInicial.className = "activo";
        $fechaFinal.className = "activo";
        $nombreCliente.className = "inactivo";
    } 
    else 
    {
		$fechaInicial.className = "inactivo";
        $fechaFinal.className = "inactivo";
        $nombreCliente.className = "activo";
        
    }
}

function busquedaPorNombre (nombre)
{
	
}

function busquedaPorFecha (fechaInicial, fechaFinal)
{

}


// ------------------------------------EJECUCION------------------------------------------

$parametrosBusqueda.addEventListener("change", ()=> cambioParametrosBusqueda($parametrosBusqueda.value) )