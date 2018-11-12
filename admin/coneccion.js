// const url = "http://209.126.105.69/AlphaAdmin/Service.asmx?op=GetLastNMessages";


/*
		const datos =`{
			Initial_Catalog : "AlphaBuilders",
			User_ID : "AlphaBuilders",
			Password: "ABuilders2018.",
			Token: "12A5BE7D-8022-40BB-B779-E37204AE7656,",
							IdProject: "A006BB92-8DAD-491F-ADF7-C734502ED3C3",
							Limit: 10}`

		$.ajax({
			type: "POST",
			url: url,
			data: datos,
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
			console.log("ERROR: " + error)
		}
*/

$.ajax(
	{
		type: "GET",
		url: 'http://fastmotorcycleservice.cloudapp.net/FastMotorcycleListService.svc/list/Bruno',
		data: "{}",
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {

			//alert('success');
			$.each(data, function (i, theItem) {
				var combo = document.getElementById("cboFastBikes");
				var option = document.createElement("option");
				option.text = theItem.toString();
				option.value = theItem.toString();
				try {
					//alert('success add combo');
					combo.add(option, null); // Other browsers
				}
				catch (error) {
					alert('error found');
					combo.add(option); // really old browser
				}

			});
		},
		error: function (msg, url, line) {
			alert('error trapped in error: function(msg, url, line)');
			alert('msg = ' + msg + ', url = ' + url + ', line = ' + line);

		}
	});
//INTENTA EL ENVIO DE DATOS, NO DEBERIA NECESITAR CONTRASEÑAS