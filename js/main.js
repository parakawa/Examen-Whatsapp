
$(document).ready(function(){
		llenado()
});



function llenado(){
	tam=datos.length
	for(var i=0;i<tam;i++){
		var div=document.createElement("div")
		div.setAttribute("class","panel-list-message-contact")
		div.innerHTML="<div class='profile-img'><img src='image/"+datos[i].imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+datos[i].nombre+"</div><div class='message-hour '>"+datos[i].mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+datos[i].mensajes[0].contenido+"</p></div></div>"
		$(".panel-contact-chat").append(div)
	}
}


/*$(document).ready(function(){
	var texto=$("#search").val()
	$.getJSON("data.json",function(data){
		var output="";
		$.each(data,function(key,val){
			output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
		})
		$(".panel-contact-chat").html(output)
		$.each(data, function (key,val){
			if (val.nombre.search(texto) != -1 && texto!="" ){
			 output=""
			 output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
			 $(".panel-contact-chat").html(output)
			}
			else if (texto!="" || texto=undefined){
				output=""
			 	output+="<div class='panel-list-message-contact'><div class='profile-img'><img src='image/"+val.imagen+"'/></div><div class='message-text show-dots'><div class='message-text-detail'><div class='name-contact show-dots'>"+val.nombre+"</div><div class='message-hour '>"+val.mensajes[0].fecha+"</div></div><div class='message-chat show-dots'><p class='show-dots'>"+val.mensajes[0].contenido+"</p></div></div></div>"
				$(".panel-contact-chat").html(output)
			}

			else {
				output="<p>No se encontró</p>"
				$(".panel-contact-chat").html(output)
			}○

		});	
	});

});*/