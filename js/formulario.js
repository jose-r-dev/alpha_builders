const metodo = "GetStock";
const url = "http://condor1393.startdedicated.com/AlphaAdmin/Service.asmx";

$.ajax({
    type: "POST",
    url: url,
    data: {},
    success: coneccionExitosa,
    error: coneccionFallida,
    dataType: "json"
  });

  function coneccionExitosa(respuesta) 
  {
    console.log(respuesta)    
  }

  function coneccionFallida(error)
  {
      console.log(error)
  }